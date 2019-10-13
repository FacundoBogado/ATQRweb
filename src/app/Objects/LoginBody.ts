export class LoginBody{
    document: number;
    password: string;

    constructor( document : number, password : string){
        this.document = document;
        this.password = password;
    }
}