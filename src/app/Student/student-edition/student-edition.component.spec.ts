import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditionComponent } from './student-edition.component';

describe('StudentEditionComponent', () => {
  let component: StudentEditionComponent;
  let fixture: ComponentFixture<StudentEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
