import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router } from '@angular/router';
import { GenericObject } from 'src/app/Objects/GenericObject';

@Component({
  selector: 'app-student-abm',
  templateUrl: './student-abm.component.html',
  styleUrls: ['./student-abm.component.css']
})
export class StudentAbmComponent implements OnInit {

  studentName: string;
  hideSpinner: boolean = true;
  students: Array<any> = [];
  header: string[] = ['#', 'Nombre completo', 'Editar', 'Eliminar'];
  url: string = '/student/information/';

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }

  getStudents() {
    return new Promise(resolve => {
      this.commonService.getAll("student")
        .subscribe(
          (data: any) => {
            resolve(data);
            this.setProperties(data);
            //this.studentName = data[0].firstName + ' ' + data[0]; NOMBRE DEL ADMIN 
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
        object.setName = array[i].firstName + ' ' + array[i].lastName;
        object.setFinished = true;
        this.students.push(object);
      }
    }
  }
}
