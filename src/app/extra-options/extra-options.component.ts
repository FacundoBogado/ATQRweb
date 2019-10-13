import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extra-options',
  templateUrl: './extra-options.component.html',
  styleUrls: ['./extra-options.component.css']
})
export class ExtraOptionsComponent implements OnInit {
  @Input() objectType: string;
  icon: string;
  backIcon: boolean;
  mainIcon: string;


  constructor() {
    this.mainIcon = "";
    this.backIcon = false;
    this.objectType = "";
  }

  ngOnInit() {
    if(this.objectType == "Professor" || this.objectType == "Student"){
      this.mainIcon = "fas fa-chalkboard-teacher fa-2x";
    }else if( this.objectType == "Assigment") {
      this.mainIcon = "fas fa-file-signature fa-2x";
    }
  }

  displayExtraOptions() {
    if (this.objectType !== "") {
      this.backIcon = true;

      if (this.objectType == "Professor") {
        this.icon = "fas fa-chalkboard fa-2x";
      }else if( this.objectType == "Assigment"){
        this.icon = "fas fas fa-file-contract fa-2x"

      }
    }
  }

  showMainIcon(value : string){
    if (value != "") {
      this.backIcon = false;
    }
  }
}
