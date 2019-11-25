import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Common/Services/common.service';
import { ProfessorBody } from '../Objects/Bodys';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQrComponent implements OnInit {
  qrData: string;
  inputText: string;
  createdCode = '';
  elementType: 'canvas';
  generatedCodes: Array<string>;
  presentStudents: Array<any>;
  randomColor: Array<string>;
  subscription: Subscription;
  studentSubscription: Subscription;
  action: any;
  courseId: number;
  classDayId: number;
  students: Array<any> =[];
  errorMessage: string;
  wasAlreadyOpened: boolean = false;

  constructor(private router: Router, private activeRouter: ActivatedRoute, private http: HttpClient, private service: CommonService) { }

  ngOnInit() {
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.startClass(this.courseId);
    this.subscription = interval(10000).subscribe(val => this.generateQR());
    this.studentSubscription = interval(1000).subscribe(val => this.checkPresentStudents());
    this.createdCode = this.qrValue();
    this.generatedCodes = [];
    this.randomColor = [];
    this.presentStudents = [];
    this.action = null;
  }

  generateQR() {
    this.createdCode = this.qrValue();
  }

  /*deleteItem(position: number) {
    document.getElementById("student" + position).remove();
    this.presentStudents.splice(position, 1);
    this.generatedCodes.splice(position, 1);
  }*/

  redirectToView() {
    this.router.navigate(['clase/' + this.classDayId + '/cursoFinalizado', this.courseId]);
  }

  qrValue() {
    const secs = new Date();
    return this.courseId + '-' + secs.getSeconds().toString() + '-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  startClass(courseId: number) {
    this.http.post('http://obscure-taiga-98790.herokuapp.com/course/' + courseId + '/class', null).subscribe(
      (data: any) => {
        this.classDayId = data.id;
      }, error => {
        this.errorMessage = error.error.message;
        this.wasAlreadyOpened = true;
      }
    );
  }

  checkPresentStudents() {
    this.http.get('http://obscure-taiga-98790.herokuapp.com/course/' + this.courseId + '/present').subscribe(
      (data: any) => {

        for(let alumn of data){
          let student = this.presentStudents.find((s) => s.id == alumn.id)
          if(!student) {
            this.validatePresentStudent(alumn);
          }
        }        
      }, error => {
        this.router.navigate(['/error']);
      }
    )
  }

  validatePresentStudent(object: any) {
      this.presentStudents.push(object);
      const fullName = object.firstName + ' ' + object.lastName
      this.generatedCodes.push(fullName);
      this.randomColor.push(this.randomHSL());
  }

  randomHSL() {
    return "hsl(" + 360 * Math.random() + ',' +
      (25 + 70 * Math.random()) + '%,' +
      (85 + 10 * Math.random()) + '%)'
  }

  endClass() {
    const classDay = new ProfessorBody(this.classDayId);
    this.service.endClass(this.courseId, classDay).subscribe(
      (data: any) => {
      }, error => {
        this.router.navigate(['/error']);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.studentSubscription.unsubscribe();

  }
}