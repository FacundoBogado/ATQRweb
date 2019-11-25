export class GenericObject {
    private Id: number;
    private Value: any;
    private FullName: string;
    private Finished: boolean;

    public get getFinished(): boolean {
        return this.Finished;
    }
    public set setFinished(value: boolean) {
        this.Finished = value;
    }

    public get getName(): string {
        return this.FullName;
    }
    public set setName(value: string) {
        this.FullName = value;
    }
    
    public get getId(): number {
        return this.Id;
    }
    public set setId(value: number) {
        this.Id = value;
    }

    public get getValue(): any {
        return this.Value;
    }
    public set setValue(value: any) {
        this.Value = value;
    }
}