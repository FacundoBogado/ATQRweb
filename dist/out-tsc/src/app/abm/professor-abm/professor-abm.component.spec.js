import { async, TestBed } from '@angular/core/testing';
import { ProfessorAbmComponent } from './professor-abm.component';
describe('ProfessorAbmComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfessorAbmComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProfessorAbmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=professor-abm.component.spec.js.map