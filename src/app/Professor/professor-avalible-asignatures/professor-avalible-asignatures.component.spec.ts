import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAvalibleAsignaturesComponent } from './professor-avalible-asignatures.component';

describe('ProfessorAvalibleAsignaturesComponent', () => {
  let component: ProfessorAvalibleAsignaturesComponent;
  let fixture: ComponentFixture<ProfessorAvalibleAsignaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAvalibleAsignaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAvalibleAsignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
