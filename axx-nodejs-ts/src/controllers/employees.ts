import { Employee, Position } from '../models/employee';
import {RequestHandler} from 'express';

const EMPLOYEES_DB: Employee[] = [
    {
        id: '1',
        name:'Chewie',
        position:Position.CEO,
        salary: 750000
    },
    {
        id: '2',
        name:'Luke',
        position:Position.CFO,
        salary: 1000
    },
    {
        id: '3',
        name:'Leia',
        position:Position.COO,
        salary: 20000
    }
];

export const createEmployee: RequestHandler = (req, resp, _next) => {
    const name = (req.body as {name:string}).name;
    const salary = (req.body as {salary:number}).salary;
    const position = (req.body as {position:number}).position;
    
    const newEmployee = new Employee(Math.random().toString(), name, salary, position);

    EMPLOYEES_DB.push(newEmployee);

    resp.status(201).json({message: 'Created the employee', employee: newEmployee});
}

export const getEmployees: RequestHandler = (_req, resp, _next) => {
    resp.status(200).json({employees: EMPLOYEES_DB});
}

export const getEmployeeById: RequestHandler<{id:string}> = (req, resp, _next) => {
    const employeeId = req.params.id;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);

    if(employeeIndex < 0){
        throw new Error('Could not find the employee');
    }

    resp.status(200).json({employee: EMPLOYEES_DB[employeeIndex]});
}

export const deleteEmployee: RequestHandler<{id:string}> = (req, resp, _next) => {
    const employeeId = req.params.id;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);

    if(employeeIndex < 0){
        throw new Error('Could not find the employee');
    }

    EMPLOYEES_DB.splice(employeeIndex);

    resp.status(200).json({employee: EMPLOYEES_DB});
}

export const modifyEmployee: RequestHandler<{id:string}> = (req, resp, _next) => {
    const employeeId = req.params.id;
    const newName = req.body.name;
    const newSalary = req.body.salary;
    const newPosition = req.body.position;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);

    if(employeeIndex < 0){
        throw new Error('Could not find the employee');
    }

    if(newName != null){
        EMPLOYEES_DB[employeeIndex].name = newName;
    }
    if(newSalary != null){
        EMPLOYEES_DB[employeeIndex].salary = newSalary;
    }
    if(newPosition != null){
        EMPLOYEES_DB[employeeIndex].position = newPosition;
    }

    resp.status(200).json({employee: EMPLOYEES_DB[employeeIndex]});
}