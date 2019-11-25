import { async, TestBed } from '@angular/core/testing';
import { FinishScreenComponent } from './finish-screen.component';
describe('FinishScreenComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FinishScreenComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FinishScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=finish-screen.component.spec.js.map