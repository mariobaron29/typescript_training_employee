export enum Position{
    CEO,
    COO,
    CFO,
    CTO,
    Developer
}
export class Employee{
    id: string;
    name: string;
    salary: number;
    position: Position
    
    constructor(id:string, name:string, salary:number, position:Position){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}