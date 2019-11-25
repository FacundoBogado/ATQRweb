import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignature-details',
  templateUrl: './asignature-details.component.html',
  styleUrls: ['./asignature-details.component.css']
})
export class AsignatureDetailsComponent implements OnInit {
  students = [];
  dates = [];
  courseId: number;
  course: any;
  asignature: string;
  fullName: string;
  hideSpinner: boolean = true;
  @Input() url:string;
  @Input() isAdmin:boolean = false;

  constructor(private service : CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.courseId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    this.getInfo(this.courseId);
    if(this.url == undefined){
      this.url = '/materiasDisponibles';
    }
  }

  redirectToView(url: string){
    if(!this.isAdmin){
      this.router.navigate([url]);
    }
  }

  getInfo(id: number){
    this.service.getCourses(id).subscribe(
      (data: any)=> {
        this.course = data;
        this.students = this.course.students;
        this.asignature = this.course.asignature.name;
        this.fullName = this.course.professor.firstName + ' ' + this.course.professor.lastName
        this.dates = this.course.classDayList;
        this.hideSpinner = false;
      }
    )
  }
}
