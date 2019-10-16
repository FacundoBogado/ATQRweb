import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/app/objects.json';

@Component({
  selector: 'app-finish-screen',
  templateUrl: './finish-screen.component.html',
  styleUrls: ['./finish-screen.component.css']
})
export class FinishScreenComponent implements OnInit {
  date: string;
  hours: string;
  students = [];

  constructor() { }

  ngOnInit() {
    this.students = STUDENTS;
    const today = new Date();
    this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    this.hours = today.getHours() + ":" + today.getMinutes();
  }
}
