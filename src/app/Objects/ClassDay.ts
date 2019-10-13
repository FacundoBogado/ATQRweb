import {Assistance} from './Assistance';

export class ClassDay{
    private Id: number;
    private Cancelled: boolean;
    private Assistance: Array<Assistance>;
    private Date: Date;

    constructor() {}
    
    public get getDate(): Date {
        return this.Date;
    }

    public set setDate(value: Date) {
        this.Date = value;
    }

    public get getCancelled(): boolean {
        return this.Cancelled;
    }

    public set setCancelled(value: boolean) {
        this.Cancelled = value;
    }

    public get getAssistance(): Array<Assistance> {
        return this.Assistance;
    }

    public set getAssistance(value: Array<Assistance>) {
        this.Assistance = value;
    }
}