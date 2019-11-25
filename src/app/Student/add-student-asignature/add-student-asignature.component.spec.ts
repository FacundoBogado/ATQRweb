import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentAsignatureComponent } from './add-student-asignature.component';

describe('AddStudentAsignatureComponent', () => {
  let component: AddStudentAsignatureComponent;
  let fixture: ComponentFixture<AddStudentAsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentAsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentAsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
