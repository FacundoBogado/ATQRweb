import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../Common/Services/common.service';
import { Professor } from 'src/app/Objects/User';


@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  professorId: number;
  fullName: string;
  document: string;
  mail: string;
  birth: string;
  password: string;
  hideSpinner: boolean = true;
  professor: any;
  courses: Array<any> = [];

  constructor(private service : CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.professorId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getInfo();
    this.getAll();
  }

  getInfo(){
    this.service.getById(this.professorId, 'professor').subscribe(
      (data:any) => {
        this.fullName = data.firstName + ' ' + data.lastName;
        this.document = data.document;
        this.mail = data.mail;
        this.birth = data.birth;
        this.password = data.password;
        this.hideSpinner = false;
      }
    )
  }

  getAll(){
    this.service.getAll("course").subscribe(
      (data:any) => {
        for (let i = 0; i < data.length; i++) {
          if(data[i].professor.id === this.professorId){
            this.courses.push(data[i]);
          }
        }
        this.hideSpinner = false;
      }
    )
  }

}
