import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridForAdminComponent } from './grid-for-admin.component';

describe('GridForAdminComponent', () => {
  let component: GridForAdminComponent;
  let fixture: ComponentFixture<GridForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
