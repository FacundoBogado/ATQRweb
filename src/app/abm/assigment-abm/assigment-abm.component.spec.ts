import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentAbmComponent } from './assigment-abm.component';

describe('AssigmentAbmComponent', () => {
  let component: AssigmentAbmComponent;
  let fixture: ComponentFixture<AssigmentAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
