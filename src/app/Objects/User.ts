import { Injectable } from '@angular/core';

abstract class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private document: number;
    private mail: string;
    private birth: string;
    private imageUrl: string;
    private password: string;
    private isAdmin: boolean = false;

    constructor() { }

    public get getFirstName(): string {
        return this.firstName;
    }

    public set setFirstName(value: string) {
        this.firstName = value;
    }

    public get getLastName(): string {
        return this.lastName;
    }

    public set setLastName(value: string) {
        this.lastName = value;
    }

    public get getDocument(): number {
        return this.document;
    }

    public set setDocument(value: number) {
        this.document = value;
    }

    public get getMail(): string {
        return this.mail;
    }

    public set setMail(value: string) {
        this.mail = value;
    }

    public get getBirth(): string {
        return this.birth;
    }

    public set setBirth(value: string) {
        this.birth = value;
    }

    public get getImageUrl(): string {
        return this.imageUrl;
    }

    public set setImageUrl(value: string) {
        this.imageUrl = value;
    }

    public get getPassword(): string {
        return this.password;
    }

    public set setPassword(value: string) {
        this.password = value;
    }

    public get getIsAdmin(): boolean {
        return this.isAdmin;
    }

    public set setIsAdmin(value: boolean) {
        this.isAdmin = value;
    }
}

@Injectable()
export class Student extends User {
    constructor(FirstName: string, LastName: string, Document: number, Mail: string, Birth: string, ImageUrl: string, Password: string) {
        super();
        this.setFirstName = FirstName;
        this.setLastName = LastName;
        this.setDocument = Document;
        this.setMail = Mail;
        this.setBirth = Birth;
        this.setImageUrl = ImageUrl;
        this.setPassword = Password;
    }
}

@Injectable()
export class Professor extends User {

    constructor(FirstName: string, LastName: string, Document: number, Mail: string, Birth: string, ImageUrl: string, Password: string) {
        super();
        this.setFirstName = FirstName;
        this.setLastName = LastName;
        this.setDocument = Document;
        this.setMail = Mail;
        this.setBirth = Birth;
        this.setImageUrl = ImageUrl;
        this.setPassword = Password;
    }
}