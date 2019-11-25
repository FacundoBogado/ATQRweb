import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorBody } from 'src/app/Objects/Bodys';

@Component({
  selector: 'app-student-edition',
  templateUrl: './student-edition.component.html',
  styleUrls: ['./student-edition.component.css']
})
export class StudentEditionComponent implements OnInit {

  studentId: number;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  birth: string;
  password: string;
  hideSpinner:boolean = true;
  student:any;

  constructor(private service: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.studentId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getData();
  }

  getData() {
    let path = 'student/' + this.studentId
    this.service.getCurrentUser(path).subscribe(
      (data: any) => {
        this.student = data;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.document = data.document;
        this.email = data.mail;
        this.birth = data.birth;
        this.password = data.password;
        this.hideSpinner = false;
      }, error => {
        this.router.navigate(['/error']);
      });
  }
}
