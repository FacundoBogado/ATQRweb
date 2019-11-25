import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let SimpleModalComponent = class SimpleModalComponent {
    constructor() {
        this.buttonStyle = "";
        this.action = new EventEmitter();
    }
    ngOnInit() {
        if (this.buttonStyle == "") {
            this.buttonStyle = "btn btn-outline-primary";
        }
    }
    triggerAction() {
        this.action.emit();
    }
};
tslib_1.__decorate([
    Input()
], SimpleModalComponent.prototype, "message", void 0);
tslib_1.__decorate([
    Input()
], SimpleModalComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input()
], SimpleModalComponent.prototype, "buttonMessage", void 0);
tslib_1.__decorate([
    Input()
], SimpleModalComponent.prototype, "buttonStyle", void 0);
tslib_1.__decorate([
    Output()
], SimpleModalComponent.prototype, "action", void 0);
SimpleModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-simple-modal',
        templateUrl: './simple-modal.component.html',
        styleUrls: ['./simple-modal.component.css']
    })
], SimpleModalComponent);
export { SimpleModalComponent };
//# sourceMappingURL=simple-modal.component.js.map