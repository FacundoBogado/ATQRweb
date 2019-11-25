import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
class User {
    constructor() { }
    get getFirstName() {
        return this.FirstName;
    }
    set setFirstName(value) {
        this.FirstName = value;
    }
    get getLastName() {
        return this.LastName;
    }
    set setLastName(value) {
        this.LastName = value;
    }
    get getDocument() {
        return this.Document;
    }
    set setDocument(value) {
        this.Document = value;
    }
    get getMail() {
        return this.Mail;
    }
    set setMail(value) {
        this.Mail = value;
    }
    get getBirth() {
        return this.Birth;
    }
    set setBirth(value) {
        this.Birth = value;
    }
    get getImageUrl() {
        return this.ImageUrl;
    }
    set setImageUrl(value) {
        this.ImageUrl = value;
    }
    get getPassword() {
        return this.Password;
    }
    set setPassword(value) {
        this.Password = value;
    }
    get getCreatedAt() {
        return this.CreatedAt;
    }
    set setCreatedAt(value) {
        this.CreatedAt = value;
    }
}
let Student = class Student extends User {
    constructor(FirstName, LastName, Document, Mail, Birth, ImageUrl, Password) {
        super();
    }
};
Student = tslib_1.__decorate([
    Injectable()
], Student);
export { Student };
let Professor = class Professor extends User {
    constructor(FirstName, LastName, Document, Mail, Birth, ImageUrl, Password, http) {
        super();
        this.http = http;
    }
};
Professor = tslib_1.__decorate([
    Injectable()
], Professor);
export { Professor };
//# sourceMappingURL=User.js.map