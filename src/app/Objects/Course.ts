import{Asignature} from './Asignature';
import {Student, Professor} from './User';
import { ClassDay } from './ClassDay';

export class Course{
    private Id: number;
    private Asignature: Asignature;
    private Code: string;
    private Students: Array<Student>;
    private Professor: Professor;
    private ClassDayList: Array<ClassDay>;

    constructor() { }

    public get getAsignature(): Asignature {
        return this.Asignature;
    }

    public set setAsignature(value: Asignature) {
        this.Asignature = value;
    }

    public get getode(): string {
        return this.Code;
    }
    public set setCode(value: string) {
        this.Code = value;
    }

    public get getStudents(): Array<Student> {
        return this.Students;
    }

    public set setStudents(value: Array<Student>) {
        this.Students = value;
    }

    public get getProfessor(): Professor {
        return this.Professor;
    }

    public set setProfessor(value: Professor) {
        this.Professor = value;
    }

    public get getClassDayList(): Array<ClassDay> {
        return this.ClassDayList;
    }

    public set setClassDayList(value: Array<ClassDay>) {
        this.ClassDayList = value;
    }

}