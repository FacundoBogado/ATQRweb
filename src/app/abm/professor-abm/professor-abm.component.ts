import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router } from '@angular/router';
import { GenericObject } from 'src/app/Objects/GenericObject';

@Component({
  selector: 'app-professor-abm',
  templateUrl: './professor-abm.component.html',
  styleUrls: ['./professor-abm.component.css']
})
export class ProfessorAbmComponent implements OnInit {
  header: Array<String>;
  professors: Array<any>;
  redirectTo: string;
  hideSpinner:boolean = true;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.header= ['#', 'Nombre', 'Editar','Eliminar']
    this.professors = [];
    this.redirectTo = 'professor/details/';
  }

  getProfessors(){
    return new Promise(resolve => {
      this.commonService.getProfessors()
        .subscribe(
          (data: any) => {
            resolve(data);
            this.setProperties(data);
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
        object.setValue = array[i].firstName + ' ' + array[i].lastName;
        object.setId = array[i].id;
        object.setFinished = true;
        this.professors.push(object);
      }
    }
  }

}
