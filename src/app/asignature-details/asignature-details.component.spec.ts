import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignatureDetailsComponent } from './asignature-details.component';

describe('AsignatureDetailsComponent', () => {
  let component: AsignatureDetailsComponent;
  let fixture: ComponentFixture<AsignatureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignatureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
