import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

abstract class User{
    private Id: number;
    private FirstName: string;
    private LastName: string;
    private Document: number;
    private Mail: string;
    private Birth: Date;
    private ImageUrl: string;
    private Password: string;
    private CreatedAt: Date;

    constructor() { }
    
    public get getFirstName(): string {
        return this.FirstName;
    }

    public set setFirstName(value: string) {
        this.FirstName = value;
    }
    
    public get getLastName(): string {
        return this.LastName;
    }

    public set setLastName(value: string) {
        this.LastName = value;
    }
    
    public get getDocument(): number {
        return this.Document;
    }

    public set setDocument(value: number) {
        this.Document = value;
    }
    
    public get getMail(): string {
        return this.Mail;
    }

    public set setMail(value: string) {
        this.Mail = value;
    }
    
    public get getBirth(): Date {
        return this.Birth;
    }

    public set setBirth(value: Date) {
        this.Birth = value;
    }
    
    public get getImageUrl(): string {
        return this.ImageUrl;
    }

    public set setImageUrl(value: string) {
        this.ImageUrl = value;
    }
    
    public get getPassword(): string {
        return this.Password;
    }

    public set setPassword(value: string) {
        this.Password = value;
    }
    
    public get getCreatedAt(): Date {
        return this.CreatedAt;
    }

    public set setCreatedAt(value: Date) {
        this.CreatedAt = value;
    }
}

@Injectable()
export class Student extends User{
    constructor(FirstName: string, LastName: string , Document: number , Mail: string , Birth: Date, ImageUrl: string, Password : string) {
        super();
    }
}

@Injectable()
export class Professor extends User{
    
    constructor(FirstName: string, LastName: string , Document: number , Mail: string , Birth: Date, ImageUrl: string, Password : string, private http: HttpClient) {
        super();
    }
}