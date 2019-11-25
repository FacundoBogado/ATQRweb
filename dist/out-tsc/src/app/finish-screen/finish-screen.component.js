import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { STUDENTS } from 'src/app/objects.json';
let FinishScreenComponent = class FinishScreenComponent {
    constructor() {
        this.students = [];
    }
    ngOnInit() {
        this.students = STUDENTS;
        const today = new Date();
        this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.hours = today.getHours() + ":" + today.getMinutes();
    }
};
FinishScreenComponent = tslib_1.__decorate([
    Component({
        selector: 'app-finish-screen',
        templateUrl: './finish-screen.component.html',
        styleUrls: ['./finish-screen.component.css']
    })
], FinishScreenComponent);
export { FinishScreenComponent };
//# sourceMappingURL=finish-screen.component.js.map