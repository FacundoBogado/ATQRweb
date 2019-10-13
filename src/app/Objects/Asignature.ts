export class Asignature {
    private Id: number;
    private Name: string;
    private Code: string;

    constructor() { }

    public get getCode(): string {
        return this.Code;
    }

    public set setCode(value: string) {
        this.Code = value;
    }

    public get getName(): string {
        return this.Name;
    }

    public set setName(value: string) {
        this.Name = value;
    }    
}