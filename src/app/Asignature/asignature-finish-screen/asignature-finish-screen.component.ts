import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Common/Services/common.service';
import { ProfessorBody } from 'src/app/Objects/Bodys';
import { GenericObject } from 'src/app/Objects/GenericObject';

@Component({
  selector: 'app-asignature-finish-screen',
  templateUrl: './asignature-finish-screen.component.html',
  styleUrls: ['./asignature-finish-screen.component.css']
})
export class AsignatureFinishScreenComponent implements OnInit {
  courseId: number;
  title1: string;
  subTitle1: string;
  subTitle2: string;
  class: any;
  classDayId: number;
  date: string;
  hours: string;
  students: Array<any> = [];
  absentStudents: Array<any> = [];
  presentStudents: Array<any> = [];
  hideSpinner: boolean = true;


  constructor(private activeRouter: ActivatedRoute, private common: CommonService, private router: Router) { }

  ngOnInit() {
    this.classDayId = parseInt(this.activeRouter.snapshot.paramMap.get('id1'));
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id2'));
    const today = new Date();
    this.hours = today.getHours() + ":" + today.getMinutes();
    this.endClass();
    this.class = this.getCourses();
  }

  endClass() {
    const classDay = new ProfessorBody(this.classDayId);
    this.common.endClass(this.courseId, classDay).subscribe(
      (data: any) => {
        this.setProperties(data);
        this.absentStudents = this.students.filter((a) => a.Value == "ABSENT");
        this.presentStudents = this.students.filter((a) => a.Value == "PRESENT");

      }, error => {
        this.router.navigate(['/error']);
      }
    );
  }

  setProperties(array: any[]) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        const object = new GenericObject();
        object.setValue = array[i].assistanceStatus;
        object.setName = array[i].student.firstName + ' ' + array[i].student.lastName;
        object.setId = array[i].student.id;
        object.setFinished = true;
        this.students.push(object);
      }
    }
  }

  getCourses() {
    this.common.getCourses(this.courseId).subscribe(
      (data: any) => {
        const classDay = data.classDayList.filter((day) => day.id == this.classDayId)[0].date.split('-');
        let year = classDay[0];
        let month = classDay[1];
        let day = classDay[2];

        this.date = day + '-' + month + '-' + year;
        this.subTitle1 = "Alumnos faltantes:";
        this.title1 = "Clase del " + this.date + " cerrada satisfactoriamente.";
        this.subTitle2 = "Alumnos presentes:"
        this.hideSpinner = false;
      }
    );
  }

  convert(str: string) {
    const date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");
  }

}
