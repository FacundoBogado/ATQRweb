import { async, TestBed } from '@angular/core/testing';
import { GenerateQrComponent } from './generate-qr.component';
describe('GenerateQrComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GenerateQrComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GenerateQrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generate-qr.component.spec.js.map