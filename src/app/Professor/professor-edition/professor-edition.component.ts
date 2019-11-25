import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-edition',
  templateUrl: './professor-edition.component.html',
  styleUrls: ['./professor-edition.component.css']
})
export class ProfessorEditionComponent implements OnInit {

  professorId: number;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  birth: string;
  password: string;
  hideSpinner:boolean = true;
  professor:any;

  constructor(private service: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.professorId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getData();
  }

  getData() {
    let path = 'professor/' + this.professorId
    this.service.getCurrentUser(path).subscribe(
      (data: any) => {
        this.professor = data;
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
