import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user-to-asignature',
  templateUrl: './add-user-to-asignature.component.html',
  styleUrls: ['./add-user-to-asignature.component.css']
})
export class AddUserToAsignatureComponent implements OnInit {

  fullname: String;
  courseId: number;
  course: any;
  asignature: string;
  fullName: string;
  students: [] = [];
  hideSpinner: boolean = true;
  studentsWithAsignature: any[] = [];
  studentsWithoutAsignature: any[] = [];

  constructor(private service: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getInfo(this.courseId);
    this.getStudents()
  }

  getInfo(id: number) {
    this.service.getCourses(id).subscribe(
      (data: any) => {
        this.course = data;
        this.asignature = this.course.asignature.name;
        this.fullName = this.course.professor.firstName + ' ' + this.course.professor.lastName;
        for (let i = 0; i < data.students.length; i++) {
          let student: any = data.students[i];
          if (student != null) {
            this.studentsWithAsignature.push(student);
          }
        }
        this.getStudents();
      }
    )
  }

  getStudents() {
    this.service.getAll('student').subscribe(
      (data: any) => {
        if (this.course != undefined) {
            for (let i = 0; i < data.length; i++) {
              let student = data[i].id;
              let x = this.studentsWithAsignature.filter((s) => s.id === student)
              if (x.length == 0) {
                this.studentsWithoutAsignature.push(data[i]);
              }
            }
            this.hideSpinner = false;
          }
      }, error => {
        
      }
    )
  }

  addStudent(id: number) {
    let student = this.studentsWithoutAsignature.find((s) => s.id == id);
    this.service.addStudent(this.courseId, student ).subscribe(
      (data:any)=>{
        window.location.reload();
      }
    )
  }

  removeStudent(id: number) {
    let student = this.studentsWithAsignature.find((s) => s.id == id);
    this.service.removeStudent(this.courseId, student ).subscribe(
      (data:any)=>{
        window.location.reload();
      }
    )
  }
}
