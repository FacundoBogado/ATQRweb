import { async, TestBed } from '@angular/core/testing';
import { AvalibleAsignaturesComponent } from './avalible-asignatures.component';
describe('AvalibleAsignaturesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AvalibleAsignaturesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AvalibleAsignaturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=avalible-asignatures.component.spec.js.map