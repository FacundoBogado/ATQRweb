import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAsignatureComponent } from './delete-asignature.component';

describe('DeleteAsignatureComponent', () => {
  let component: DeleteAsignatureComponent;
  let fixture: ComponentFixture<DeleteAsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
