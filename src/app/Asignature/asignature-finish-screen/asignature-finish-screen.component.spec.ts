import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignatureFinishScreenComponent } from './asignature-finish-screen.component';

describe('AsignatureFinishScreenComponent', () => {
  let component: AsignatureFinishScreenComponent;
  let fixture: ComponentFixture<AsignatureFinishScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignatureFinishScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignatureFinishScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
