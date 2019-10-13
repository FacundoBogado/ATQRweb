import { Component, OnInit, Input } from '@angular/core';
import { DATA } from 'src/app/objects.json';
import { STUDENTS } from 'src/app/objects.json';
import { ASSIGMENTS } from 'src/app/objects.json';

@Component({
  selector: 'app-grid-for-admin',
  templateUrl: './grid-for-admin.component.html',
  styleUrls: ['./grid-for-admin.component.css']
})
export class GridForAdminComponent implements OnInit {

  @Input() isProfessor: boolean;
  @Input() isAssigment: boolean;
  @Input() isAdmin: boolean;
  @Input() isStudent: boolean;
  @Input() objectType: string;
  objects = [];
  data = [];

  constructor() {
    this.objectType = "";
    this.isProfessor = false;
    this.isAssigment = false;
    this.isAdmin = false;
    this.isStudent = false;
  }

  ngOnInit() {
    if (this.isAdmin) {
      if (this.isProfessor) {
        this.data = DATA;
      } else if (this.objectType) {
        this.data = STUDENTS;
      } else if (this.isStudent) {
        this.data = ASSIGMENTS;
      }
    }else{
      if (this.isProfessor) {
        this.data = ASSIGMENTS;
      } else if (this.isAssigment) {
        this.data = ASSIGMENTS;
      }
    }

    this.objects = this.data
  }

  applyFilter(value: string) {
    this.objects = this.data.filter(object => object.name.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
  }
}