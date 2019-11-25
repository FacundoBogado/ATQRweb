import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignatureCreationComponent } from './modal-asignature-creation.component';

describe('ModalAsignatureCreationComponent', () => {
  let component: ModalAsignatureCreationComponent;
  let fixture: ComponentFixture<ModalAsignatureCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAsignatureCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsignatureCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
