import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { interval } from 'rxjs';
let GenerateQrComponent = class GenerateQrComponent {
    constructor(router) {
        this.router = router;
        this.createdCode = '';
    }
    ngOnInit() {
        const source = interval(5000);
        this.subscription = source.subscribe(val => this.generateQR());
        this.createdCode = Math.random().toString(36).substring(7);
        this.generatedCodes = [];
        this.randomColor = [];
        this.isDisplayed = true;
        this.action = null;
    }
    generateQR() {
        //if(this.inputText !== " " && this.inputText !== undefined){
        this.createdCode = this.inputText;
        this.createdCode = Math.random().toString(36).substring(7);
        this.isDisplayed = true;
        this.generatedCodes.push(this.createdCode);
        this.randomColor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        //}
    }
    deleteQR() {
        this.createdCode = '';
        this.isDisplayed = false;
        this.inputText = '';
    }
    get validateWhiteSpaces() {
        if (this.inputText == '' || this.inputText == null) {
            return this.isDisplayed = false;
        }
    }
    deleteItem(position) {
        document.getElementById("student" + position).remove();
        delete this.generatedCodes[position];
    }
    redirectToView() {
        this.router.navigate(['/cursoFinalizado']);
    }
};
GenerateQrComponent = tslib_1.__decorate([
    Component({
        selector: 'app-generate-qr',
        templateUrl: './generate-qr.component.html',
        styleUrls: ['./generate-qr.component.css']
    })
], GenerateQrComponent);
export { GenerateQrComponent };
//# sourceMappingURL=generate-qr.component.js.map