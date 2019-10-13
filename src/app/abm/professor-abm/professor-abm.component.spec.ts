import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAbmComponent } from './professor-abm.component';

describe('ProfessorAbmComponent', () => {
  let component: ProfessorAbmComponent;
  let fixture: ComponentFixture<ProfessorAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
