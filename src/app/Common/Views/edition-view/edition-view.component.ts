import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/Objects/User';
import { CommonService } from '../../Services/common.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition-view',
  templateUrl: './edition-view.component.html',
  styleUrls: ['./edition-view.component.css']
})
export class EditionViewComponent implements OnInit {

  editionForm: FormGroup;
  errorMessage: boolean;
  submitted: boolean = false;
  error: boolean = false;
  errorMessages: string;
  @Input() object: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() document: string;
  @Input() email: string;
  @Input() birth: string;
  @Input() password: string;
  @Input() back: string;
  @Input() userToBeEdited: any;
  @Input() isAsignature: boolean = false;
  @Input() isStudent: boolean = true;
  @Output() action = new EventEmitter();


  constructor(private service: CommonService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    if (!this.isAsignature) {
      if (this.isStudent) {
        this.object = 'student/'
      } else {
        this.object = 'professor/'
      }
    }
  }

  onSubmit1() {
    this.action.emit();
  }

  onSubmit() {
    this.compareObject();
  }


  compareObject() {

    const firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
    const lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
    const documento = Number((<HTMLInputElement>document.getElementById('document')).value);
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const editedUser = new Student(firstName, lastName, documento, email, this.userToBeEdited.birth, this.userToBeEdited.imageUrl, password);
    const notEditedUser = new Student(this.userToBeEdited.firstName, this.userToBeEdited.lastName, this.userToBeEdited.document, this.userToBeEdited.mail, this.userToBeEdited.birth, this.userToBeEdited.imageUrl, this.userToBeEdited.password)

    if (JSON.stringify(notEditedUser) !== JSON.stringify(editedUser)) {
      this.service.edit(this.object + this.userToBeEdited.id, editedUser).subscribe(
        (data: any) => {
          this.router.navigate([this.back]);
        }, error => {
          this.errorMessages = error.error.message;
          this.error = true;
        }
      )
    } else {
      this.router.navigate([this.back]);
    }
  }
}
