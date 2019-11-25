import { async, TestBed } from '@angular/core/testing';
import { SimpleModalComponent } from './simple-modal.component';
describe('SimpleModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=simple-modal.component.spec.js.map