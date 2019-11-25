import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginBody } from '../Objects/Bodys';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  document: number;
  password: string;
  loginForm: FormGroup;
  submitted = false;
  errorMessage: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.errorMessage = false;
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const body = new LoginBody( this.document, this.password)
    
    this.httpClient.post(`http://obscure-taiga-98790.herokuapp.com/professor/login`,body)
    .subscribe(
      (data : any) => {
        if(data != null){
          this.errorMessage = false;
          if(data.isAdmin){
            localStorage.setItem("isAdmin", data.isAdmin)
            this.router.navigate(['/menuAdmin']);
          }else{
            localStorage.setItem("id", data.id.toString());
            localStorage.setItem("isAdmin", data.isAdmin);
            this.router.navigate(['/materiasDisponibles']);
          }
        }else{
          this.errorMessage = true;
        }
      }      
    )
  }
}
