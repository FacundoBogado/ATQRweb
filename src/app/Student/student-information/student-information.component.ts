import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../Common/Services/common.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  fullName: string;
  document:string;
  mail:string;
  birth:string;
  imageUrl: string;
  password:string;
  studentId: number;
  hideSpinner: boolean = true;
  student: any;
  courses: Array<any> = [];

  constructor(private service : CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.studentId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getInformation();
    this.getAll();
  }

  getInformation(){
    this.service.getAll("/student/" + this.studentId).subscribe(
      (data: any)=> {
        this.document = data.document;
        this.mail = data.mail;
        this.birth = data.birth;
        this.imageUrl = data.imageUrl;
        this.password = data.password;
        this.student = data;
        this.fullName = data.firstName + ' ' + data.lastName
      }
    )
  }


  getAll(){
    this.service.getAll("course").subscribe(
      (data:any) => {
        for (let i = 0; i < data.length; i++) {
          const course = data[i].students.filter((c) => c.id === this.studentId);
          if(course.length != 0){
            this.courses.push(data[i]);
          }
        }
        this.hideSpinner = false;
      }
    )
  }
}
