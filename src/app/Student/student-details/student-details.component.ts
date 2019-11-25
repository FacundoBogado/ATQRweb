import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorBody } from '../../Objects/Bodys';
import { CourseBody } from '../../Objects/Bodys';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  hideSpinner: boolean = true;
  studentId: number;
  courseId: number;
  student: any;
  course:any;
  name: string;
  percentage: number;
  progressBarStyle: string;
  dates: Array<any>
  absentClasses: Array<any>;
  color: string;

  constructor(private service: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.studentId = parseInt(this.activeRouter.snapshot.paramMap.get('id2'));
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id1'));
    this.getData();
    //#ffc42e color por si llega tarde(como validarlo?);
  }

  getData() {
    const body = new ProfessorBody(this.studentId);
    this.service.getStudent(body).subscribe(
      (data: any) => {
        this.course = data.filter((c) => c.course.id === this.courseId)[0];
        this.dates = this.course.course.classDayList;
        this.student = this.course.course.students.filter((s) => s.id == this.studentId)[0]
        this.name = this.student.firstName + ' ' + this.student.lastName;
        this.percentage = this.course.percentage;
        this.getDates()
        if (this.percentage >= 70) {
          //green progress bar
          this.progressBarStyle = 'bg-success';
        } else if (this.percentage >= 30) {
          //yellow progress bar
          this.progressBarStyle = 'bg-warning';
        } else {
          //red progress bar
          this.progressBarStyle = 'bg-danger';
        }
      }, error => {
        this.router.navigate(['/error']);
      });
  }

  getDates(){
    const body = new CourseBody(this.courseId, this.studentId)
    this.service.getCourseHistory(body).subscribe(
      (data:any) =>{
        this.dates = data.filter((dates) => dates.assistanceStatus === "PRESENT");
        this.absentClasses = data.filter((dates) => dates.assistanceStatus === "ABSENT");
        this.hideSpinner = false;
      }), error => {
      this.router.navigate(['/error']);
    }
  }

}
