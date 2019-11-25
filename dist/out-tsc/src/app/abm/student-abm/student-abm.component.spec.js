import { async, TestBed } from '@angular/core/testing';
import { StudentAbmComponent } from './student-abm.component';
describe('StudentAbmComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentAbmComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StudentAbmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-abm.component.spec.js.map