import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PROFESOR } from 'src/app/objects.json';
let AvalibleAsignaturesComponent = class AvalibleAsignaturesComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    getCourses() {
        return new Promise(resolve => {
            this.commonService.getCollectionById(PROFESOR)
                .subscribe((data) => {
                resolve(data);
            });
        });
        //return this.commonService.getCollectionById(PROFESOR);
    }
};
AvalibleAsignaturesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-avalible-asignatures',
        templateUrl: './avalible-asignatures.component.html',
        styleUrls: ['./avalible-asignatures.component.css']
    })
], AvalibleAsignaturesComponent);
export { AvalibleAsignaturesComponent };
//# sourceMappingURL=avalible-asignatures.component.js.map