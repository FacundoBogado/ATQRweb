import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../Common/Services/common.service';
import { ProfessorBody } from '../../Objects/Bodys';
import { GenericObject } from '../../Objects/GenericObject';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avalible-asignatures',
  templateUrl: './avalible-asignatures.component.html',
  styleUrls: ['./avalible-asignatures.component.css']
})
export class AvalibleAsignaturesComponent implements OnInit {
  header: string[] = [' ', 'Materias', 'Nueva clase'];
  avalibleAsignatures: any[] = [];
  professorName: string;
  hideSpinner: boolean = true;
  url: string = '/details/';
  professorId: number;

  constructor(private commonService: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  getCourses() {
    const professor = new ProfessorBody(parseInt(localStorage.getItem("id")));

    return new Promise(resolve => {
      this.commonService.getCollectionById(professor)
        .subscribe(
          (data: any) => {
            resolve(data);
            this.setProperties(data);
            this.professorName = data[0].professor.firstName + ' ' + data[0].professor.lastName;
            this.hideSpinner = false;
          }, error => {
            this.router.navigate(['/error']);
          });
    });
  }

  setProperties(array: any[]) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        const object = new GenericObject();
        object.setValue = array[i].asignature.name;
        object.setId = array[i].id;
        object.setName = array[i].professor.firstName + ' ' + array[i].professor.lastName;
        object.setFinished = true;
        this.avalibleAsignatures.push(object);
      }
    }
  }
}