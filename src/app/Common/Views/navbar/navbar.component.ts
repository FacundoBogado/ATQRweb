import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  subscription: Subscription;
  subscription2: Subscription;
  url:string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.subscription = interval(500).subscribe(val => this.validateUrl());
    this.subscription2 = interval(100).subscribe(val => this.goMainPage());
    
  }

  validateUrl(){
    const notLoggedUrl = "http://localhost:4200/";
    const url = window.location.href;

    if(url !== notLoggedUrl){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

  goMainPage(){
    if(localStorage.getItem("isAdmin") == 'false'){
      this.url = 'materiasDisponibles'
    }else{
      this.url = 'menuAdmin';
    }
  }

  closeSession(){
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("id");
    this.router.navigate(['']);
  }

}
