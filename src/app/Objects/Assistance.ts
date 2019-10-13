import{Student} from'./User';

export class Assistance{
    private Id: number;
    private Student: Student;
    private Status: AssistanceStatus;

    constructor() {}

    public get getStudent(): Student {
        return this.Student;
    }

    public set setStudent(value: Student) {
        this.Student = value;
    }

    public get getStatus(): AssistanceStatus {
        return this.Status;
    }

    public set setStatus(value: AssistanceStatus) {
        this.Status = value;
    }
}