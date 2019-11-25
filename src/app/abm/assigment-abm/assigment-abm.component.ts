import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Common/Services/common.service';
import { GenericObject } from 'src/app/Objects/GenericObject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigment-abm',
  templateUrl: './assigment-abm.component.html',
  styleUrls: ['./assigment-abm.component.css']
})
export class AssigmentAbmComponent implements OnInit {

  asignatureName: string;
  hideSpinner: boolean = true;
  professors: Array <any> = [];
  header: string[] = ['#', 'Materias', 'Agregar/Quitar alumnos'];
  url: string = 'admin/details/';

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }

  getProfessors() {
    return new Promise(resolve => {
      this.commonService.getAll("course")
        .subscribe(
          (data: any) => {
            resolve(data);
            this.setProperties(data);
            if(data.length > 0){
              this.asignatureName = data[0].asignature.name;
            }
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
        this.professors.push(object);
      }
    }
  }

}
