import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ExtraOptionsComponent = class ExtraOptionsComponent {
    constructor() {
        this.mainIcon = "";
        this.backIcon = false;
        this.objectType = "";
    }
    ngOnInit() {
        if (this.objectType == "Professor" || this.objectType == "Student") {
            this.mainIcon = "fas fa-chalkboard-teacher fa-2x";
        }
        else if (this.objectType == "Assigment") {
            this.mainIcon = "fas fa-file-signature fa-2x";
        }
    }
    displayExtraOptions() {
        if (this.objectType !== "") {
            this.backIcon = true;
            if (this.objectType == "Professor") {
                this.icon = "fas fa-chalkboard fa-2x";
            }
            else if (this.objectType == "Assigment") {
                this.icon = "fas fas fa-file-contract fa-2x";
            }
        }
    }
    showMainIcon(value) {
        if (value != "") {
            this.backIcon = false;
        }
    }
};
tslib_1.__decorate([
    Input()
], ExtraOptionsComponent.prototype, "objectType", void 0);
ExtraOptionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-extra-options',
        templateUrl: './extra-options.component.html',
        styleUrls: ['./extra-options.component.css']
    })
], ExtraOptionsComponent);
export { ExtraOptionsComponent };
//# sourceMappingURL=extra-options.component.js.map