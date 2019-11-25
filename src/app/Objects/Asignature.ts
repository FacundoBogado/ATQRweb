export class Asignature {
    private Id: number;
    private name: string;
    private code: string;

    constructor() { }

    public get getCode(): string {
        return this.code;
    }

    public set setCode(value: string) {
        this.code = value;
    }

    public get getName(): string {
        return this.name;
    }

    public set setName(value: string) {
        this.name = value;
    }    
}