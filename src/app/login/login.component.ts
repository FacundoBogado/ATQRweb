import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  document:number;
  password:string;
  isHidden: boolean = true;
  router: Router;

  constructor() { }

  ngOnInit() {
  }

  validateLogIn(){
    if((this.document == undefined || this.document == null) || (this.password == "" || this.password == undefined || this.password == null)){
      this.isHidden = !this.isHidden;
    }else {
      this.isHidden = !this.isHidden;
    }

    //GET METHOD TO GET INFORMATION
    //Once i get the response and everything is ok i need to redirect
   
  }

}
