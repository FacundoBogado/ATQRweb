import { async, TestBed } from '@angular/core/testing';
import { GridForAdminComponent } from './grid-for-admin.component';
describe('GridForAdminComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GridForAdminComponent]
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
//# sourceMappingURL=grid-for-admin.component.spec.js.map