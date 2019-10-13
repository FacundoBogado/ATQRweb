export class Response{

    private Object: Object;
    private StatusCode: number;
    private Message: string;

    constructor() { }

    public get getObject(): Object {
        return this.Object;
    }

    public set setObject(value: Object) {
        this.Object = value;
    }

    public get getMessage(): string {
        return this.Message;
    }

    public set setMessage(value: string) {
        this.Message = value;
    }

    public get getStatusCode(): number {
        return this.StatusCode;
    }
    
    public set setStatusCode(value: number) {
        this.StatusCode = value;
    }
}