import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Common/Services/common.service';
import { Asignature } from 'src/app/Objects/Asignature';

@Component({
  selector: 'app-modal-asignature-creation',
  templateUrl: './modal-asignature-creation.component.html',
  styleUrls: ['./modal-asignature-creation.component.css']
})
export class ModalAsignatureCreationComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  @Input() header: string;
  @Output() action = new EventEmitter();
  @Input() isButton: boolean = true;
  @Input() buttonStyle: string = "";
  @Input() isStudent: boolean;
  
  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const code = (<HTMLInputElement>document.getElementById('code')).value;
    let body = new Asignature();
    body.setName = name;
    body.setCode = code;
    
    this.service.create('course', body).subscribe(
      (data: any) => {
        window.location.reload();
      }
    )
  }

}
