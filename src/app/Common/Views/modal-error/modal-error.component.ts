import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {
  @Input() header: string;
  @Input() errorMessage: string;
  @Input() url: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToView(){
    if (this.url !== "" && this.url !== undefined) {
      this.router.navigate([this.url]);
    }
  }
}
