import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditionComponent } from './professor-edition.component';

describe('ProfessorEditionComponent', () => {
  let component: ProfessorEditionComponent;
  let fixture: ComponentFixture<ProfessorEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
