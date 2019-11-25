import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { Student } from 'src/app/Objects/User';
import { Asignature } from 'src/app/Objects/Asignature';
import { Router } from '@angular/router';
import { Course } from 'src/app/Objects/Course';

@Component({
  selector: 'app-complex-modal',
  templateUrl: './complex-modal.component.html',
  styleUrls: ['./complex-modal.component.css']
})
export class ComplexModalComponent implements OnInit {

  loginForm: FormGroup;
  form: FormGroup;
  submitted: boolean;
  url: string = "";
  professors: any[] = [];
  asignatures: any[] = [];
  error: boolean = false;
  errorMessage: string;
  createAsignature: boolean = false;
  @Input() header: string;
  @Input() isAnUser: boolean = true;
  @Output() action = new EventEmitter();
  @Input() isButton: boolean = true;
  @Input() buttonStyle: string = "";
  @Input() isStudent: boolean;

  constructor(private formBuilder: FormBuilder, private service: CommonService, private router: Router) { }

  ngOnInit() {
    if (this.isAnUser) {
      if (this.isStudent) {
        this.url = "student"
      } else {
        this.url = "professor"
      }
      this.loginForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        document: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    } else {
      this.getProfessors();
      this.getAsignatures();
      this.url = 'course'

      this.form = this.formBuilder.group({
        professor: ['', Validators.required],
        asignature: ['', Validators.required],
        name: ['', Validators.required],
        code: ['', Validators.required],
      });

    }
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    let body: any;
    this.submitted = true;

    if (this.isAnUser) {
      if (this.loginForm.invalid) {
        return;
      }
      const firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
      const lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
      const documento = (<HTMLInputElement>document.getElementById('document')).value;
      const birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
      const email = (<HTMLInputElement>document.getElementById('email')).value;
      const password = (<HTMLInputElement>document.getElementById('password')).value;
      body = new Student(firstName, lastName, Number(documento), email, birthDate, 'image', password);
      this.service.create(this.url, body).subscribe(
        (data: any) => {
          window.location.reload();
        }, error => {
          this.errorMessage = error.error.message;
          this.error = true;
        }
      )

    } else {
      const selectedProfessor = (<HTMLSelectElement>document.getElementById('professor')).value;
      const professor = this.professors.find((p) => p.id == selectedProfessor);
      if (this.createAsignature) {
        const name = (<HTMLInputElement>document.getElementById('name')).value;
        const code = (<HTMLInputElement>document.getElementById('code')).value;
        let asignature = new Asignature();
        asignature.setName = name;
        asignature.setCode = code;
        if (professor !== undefined && asignature !== undefined) {
          this.service.create('asignature', asignature).subscribe(
            (data: any) => {
              const course = new Course(data, [], professor, []);
              this.service.create(this.url, course).subscribe(
                (data: any) => {
                  window.location.reload();
                }, error => {
                  this.errorMessage = error.error.message;
                  this.error = true;
                }
              )
            }, error => {
              this.errorMessage = error.error.message;
              this.error = true;
            }
          )
        }
      } else {
        const selectedAsignature = (<HTMLSelectElement>document.getElementById('asignature')).value;
        const asignature = this.asignatures.find((p) => p.code === selectedAsignature);
        if (professor !== undefined && asignature !== undefined) {
          const course = new Course(asignature, [], professor, []);
          this.service.create(this.url, course).subscribe(
            (data: any) => {
              window.location.reload();
            }, error => {
              this.errorMessage = error.error.message;
              this.error = true;
            }
          )
        }
      }
    }
  }

  getProfessors() {
    return new Promise(resolve => {
      this.service.getProfessors()
        .subscribe(
          (data: any) => {
            resolve(data);
            this.professors = data;
          }, error => {
            this.router.navigate(['/error']);
          });
    });
  }

  getAsignatures() {
    return new Promise(resolve => {
      this.service.getAsignatures()
        .subscribe(
          (data: any) => {
            resolve(data);
            this.asignatures = data;
          }, error => {
            this.router.navigate(['/error']);
          });
    });
  }

  displayCreationOptions() {
    this.createAsignature = !this.createAsignature;
  }

  create(url: string, body: any) {
    this.service.create(url, body).subscribe(
      (data: any) => {
        window.location.reload();
      }, error => {
        this.errorMessage = error.error.message;
        this.error = true;
      }
    )
  }
}