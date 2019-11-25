import{Asignature} from './Asignature';
import {Student, Professor} from './User';
import { ClassDay } from './ClassDay';

export class Course{
    private Id: number;
    private asignature: Asignature;
    private students: Array<Student>;
    private professor: Professor;
    private classDayList: Array<ClassDay>;

    constructor(asignature: Asignature, students: Array<Student>, professor: Professor,  classDayList: Array<ClassDay>) {
        this.asignature = asignature;
        this.students = students;
        this.professor = professor;
        this.classDayList = classDayList;
     }

    public get getAsignature(): Asignature {
        return this.asignature;
    }

    public set setAsignature(value: Asignature) {
        this.asignature = value;
    }

    public get getStudents(): Array<Student> {
        return this.students;
    }

    public set setStudents(value: Array<Student>) {
        this.students = value;
    }

    public get getProfessor(): Professor {
        return this.professor;
    }

    public set setProfessor(value: Professor) {
        this.professor = value;
    }

    public get getClassDayList(): Array<ClassDay> {
        return this.classDayList;
    }

    public set setClassDayList(value: Array<ClassDay>) {
        this.classDayList = value;
    }

}