import { async, TestBed } from '@angular/core/testing';
import { OptionsForAdminComponent } from './options-for-admin.component';
describe('OptionsForAdminComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptionsForAdminComponent]
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
//# sourceMappingURL=options-for-admin.component.spec.js.map