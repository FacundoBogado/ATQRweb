import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginBody } from '../Objects/Body';
let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, httpClient) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.errorMessage = false;
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const body = new LoginBody(this.document, this.password);
        this.httpClient.post(`http://obscure-taiga-98790.herokuapp.com/professor/login`, body)
            .subscribe((data) => {
            if (data != null) {
                this.errorMessage = false;
                this.router.navigate(['/materiasDisponibles']);
            }
            else {
                this.errorMessage = true;
            }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map