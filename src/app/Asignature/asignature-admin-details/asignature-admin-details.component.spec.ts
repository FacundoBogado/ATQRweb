import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignatureAdminDetailsComponent } from './asignature-admin-details.component';

describe('AsignatureAdminDetailsComponent', () => {
  let component: AsignatureAdminDetailsComponent;
  let fixture: ComponentFixture<AsignatureAdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignatureAdminDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignatureAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
