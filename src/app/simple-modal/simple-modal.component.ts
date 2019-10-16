import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() message: string;
  @Input() title: string;
  @Input() buttonMessage: string;
  @Input() buttonStyle: string = "";
  @Output() action = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    if(this.buttonStyle == ""){
      this.buttonStyle = "btn btn-outline-primary";
    }
  }

  triggerAction(){
    this.action.emit();
  }

}
