import { async, TestBed } from '@angular/core/testing';
import { AsignatureDetailsComponent } from './asignature-details.component';
describe('AsignatureDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AsignatureDetailsComponent]
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
//# sourceMappingURL=asignature-details.component.spec.js.map