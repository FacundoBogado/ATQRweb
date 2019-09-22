import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsForAdminComponent } from './options-for-admin.component';

describe('OptionsForAdminComponent', () => {
  let component: OptionsForAdminComponent;
  let fixture: ComponentFixture<OptionsForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
