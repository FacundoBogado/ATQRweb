import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/app/objects.json';
import { FECHAS } from 'src/app/objects.json';

@Component({
  selector: 'app-asignature-details',
  templateUrl: './asignature-details.component.html',
  styleUrls: ['./asignature-details.component.css']
})
export class AsignatureDetailsComponent implements OnInit {
  students = [];
  dates = [];

  constructor() { }

  ngOnInit() {
    this.students = STUDENTS;
    this.dates = FECHAS;
  }
}
