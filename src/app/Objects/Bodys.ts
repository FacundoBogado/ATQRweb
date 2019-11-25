export class LoginBody{
    document: number;
    password: string;

    constructor( document : number, password : string){
        this.document = document;
        this.password = password;
    }
}

export class ProfessorBody{
    id: number;

    constructor( id : number){
        this.id = id;
    }
}

export class CourseBody{
    courseId: number;
    studentId: number;

    constructor(courseId: number, studentId: number) {
        this.studentId = studentId;
        this.courseId = courseId;
        
    }
}