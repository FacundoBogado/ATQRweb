import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToAsignatureComponent } from './add-user-to-asignature.component';

describe('AddUserToAsignatureComponent', () => {
  let component: AddUserToAsignatureComponent;
  let fixture: ComponentFixture<AddUserToAsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserToAsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserToAsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
