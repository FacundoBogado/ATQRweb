import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQrComponent implements OnInit {
  qrData: string;
  inputText: string;
  createdCode = '';
  elementType: 'url';
  isDisplayed: boolean;
  generatedCodes: Array<string>;
  randomColor: Array<string>;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    const source = interval(5000);
    this.subscription = source.subscribe(val => this.generateQR());
    this.createdCode =  Math.random().toString(36).substring(7);
    this.generatedCodes = [];
    this.randomColor = [];
    this.isDisplayed = true;
  }

  generateQR(){
    //if(this.inputText !== " " && this.inputText !== undefined){
      //this.createdCode = this.inputText;
      this.createdCode = Math.random().toString(36).substring(7);
      this.isDisplayed = true;
      //this.generatedCodes.push(this.inputText);
      //this.randomColor.push('#' + Math.floor(Math.random()*16777215).toString(16));
    //}
  }

  deleteQR(){
    this.createdCode = '';
    this.isDisplayed = false;
    this.inputText = '';
  }

  get validateWhiteSpaces(){
    if(this.inputText == '' || this.inputText == null){
      return this.isDisplayed = false;
    }
  }
  deleteItem(position: number){
    console.log("student" + position);
    document.getElementById("student" + position).remove();
    delete this.generatedCodes[position];
  }
  
  //INVESTIGAR GET EN TYPESCRIPT
  //get showNoRating() {
    //return !this.isDisplayed;
  //}
}