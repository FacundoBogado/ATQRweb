import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Common/Services/common.service';

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
  @Output() action = new EventEmitter();
  @Input() data: any[] = [];
  @Input() header: string[] = [];
  @Input() fullname: string;
  @Input() redirect: string;
  @Input() editUrl: string;
  objects = [];
  arrayOfId =[];
  error: boolean = false;
  errorMessage: string;

  constructor(private router: Router, private service: CommonService) {
    this.objectType = "";
    this.isProfessor = false;
    this.isAssigment = false;
    this.isAdmin = false;
    this.isStudent = false;
  }

  ngOnInit() {
    this.action.emit();
    this.objects = this.data;
    this.arrayOfId = this.objects;
  }

  applyFilter(value: string) {
    this.objects = this.data.filter(object => object.Value.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
  }

  redirectToView(url: string, id: number) {
    this.router.navigate([url + id])
  }

  generateQR(url: string, id: number) {
    this.router.navigate([url + id]);
  }

  delete(object: string) {
    this.service.delete(object).subscribe(
      (data: any) => {
        window.location.reload();        
      }, error => {
        this.errorMessage = error.error.message;
        this.error = true;
      }
    )
  }
}