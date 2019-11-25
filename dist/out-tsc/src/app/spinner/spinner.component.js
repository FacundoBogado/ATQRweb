import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
        this.isHidden = false;
    }
};
tslib_1.__decorate([
    Input()
], SpinnerComponent.prototype, "isHidden", void 0);
SpinnerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-spinner',
        templateUrl: './spinner.component.html',
        styleUrls: ['./spinner.component.css']
    })
], SpinnerComponent);
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map