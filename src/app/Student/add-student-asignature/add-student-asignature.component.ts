import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student-asignature',
  templateUrl: './add-student-asignature.component.html',
  styleUrls: ['./add-student-asignature.component.css']
})
export class AddStudentAsignatureComponent implements OnInit {

  constructor(private service : CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  courseId: number;
  course: any;
  asignature: string;
  fullName: string;
  hideSpinner: boolean = true;

  ngOnInit() {
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getInfo(this.courseId);
  }

  getInfo(id: number){
    this.service.getCourses(id).subscribe(
      (data: any)=> {
        this.course = data;
        this.asignature = this.course.asignature.name;
        this.fullName = this.course.professor.firstName + ' ' + this.course.professor.lastName;
        this.hideSpinner = false;
      }
    )
  }
}
