import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-finish-screen',
  templateUrl: './finish-screen.component.html',
  styleUrls: ['./finish-screen.component.css']
})
export class FinishScreenComponent implements OnInit {
  @Input() title1: string;
  @Input() subTitle1: string;
  @Input() subTitle2: string;
  @Output() action = new EventEmitter();
  @Input() url: string;
  @Input() data2: Array<any>;
  @Input() list1: Array<any>;
  @Input() list2: Array<any>;
  text: string = "";

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.action.emit();
    this.text = "Parece que esta vacío por aquí.";
  }

  redirectToView(url: string) {
    if (url !== "" && url !== undefined) {
      this.router.navigate([url]);
    }else{
      this.location.back();
    }
  }
}
