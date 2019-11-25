import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibleAsignaturesComponent } from './avalible-asignatures.component';

describe('AvalibleAsignaturesComponent', () => {
  let component: AvalibleAsignaturesComponent;
  let fixture: ComponentFixture<AvalibleAsignaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalibleAsignaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalibleAsignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
