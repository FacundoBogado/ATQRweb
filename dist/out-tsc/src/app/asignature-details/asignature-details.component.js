import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { STUDENTS } from 'src/app/objects.json';
import { FECHAS } from 'src/app/objects.json';
let AsignatureDetailsComponent = class AsignatureDetailsComponent {
    constructor() {
        this.students = [];
        this.dates = [];
    }
    ngOnInit() {
        this.students = STUDENTS;
        this.dates = FECHAS;
    }
};
AsignatureDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-asignature-details',
        templateUrl: './asignature-details.component.html',
        styleUrls: ['./asignature-details.component.css']
    })
], AsignatureDetailsComponent);
export { AsignatureDetailsComponent };
//# sourceMappingURL=asignature-details.component.js.map