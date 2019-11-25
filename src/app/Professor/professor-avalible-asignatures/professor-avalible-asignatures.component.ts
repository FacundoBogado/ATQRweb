import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-avalible-asignatures',
  templateUrl: './professor-avalible-asignatures.component.html',
  styleUrls: ['./professor-avalible-asignatures.component.css']
})
export class ProfessorAvalibleAsignaturesComponent implements OnInit {
  professorId: number;

  constructor(private commonService: CommonService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.professorId = parseInt(this.activeRouter.snapshot.paramMap.get('id'));
  }

}
