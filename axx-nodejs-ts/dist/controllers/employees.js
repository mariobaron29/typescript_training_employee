"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyEmployee = exports.deleteEmployee = exports.getEmployeeById = exports.getEmployees = exports.createEmployee = void 0;
const employee_1 = require("../models/employee");
const EMPLOYEES_DB = [
    {
        id: '1',
        name: 'Chewie',
        position: employee_1.Position.CEO,
        salary: 750000
    },
    {
        id: '2',
        name: 'Luke',
        position: employee_1.Position.CFO,
        salary: 1000
    },
    {
        id: '3',
        name: 'Leia',
        position: employee_1.Position.COO,
        salary: 20000
    }
];
const createEmployee = (req, resp, _next) => {
    const name = req.body.name;
    const salary = req.body.salary;
    const position = req.body.position;
    const newEmployee = new employee_1.Employee(Math.random().toString(), name, salary, position);
    EMPLOYEES_DB.push(newEmployee);
    resp.status(201).json({ message: 'Created the employee', employee: newEmployee });
};
exports.createEmployee = createEmployee;
const getEmployees = (_req, resp, _next) => {
    resp.status(200).json({ employees: EMPLOYEES_DB });
};
exports.getEmployees = getEmployees;
const getEmployeeById = (req, resp, _next) => {
    const employeeId = req.params.id;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);
    if (employeeIndex < 0) {
        throw new Error('Could not find the employee');
    }
    resp.status(200).json({ employee: EMPLOYEES_DB[employeeIndex] });
};
exports.getEmployeeById = getEmployeeById;
const deleteEmployee = (req, resp, _next) => {
    const employeeId = req.params.id;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);
    if (employeeIndex < 0) {
        throw new Error('Could not find the employee');
    }
    EMPLOYEES_DB.splice(employeeIndex);
    resp.status(200).json({ employee: EMPLOYEES_DB });
};
exports.deleteEmployee = deleteEmployee;
const modifyEmployee = (req, resp, _next) => {
    const employeeId = req.params.id;
    const newName = req.body.name;
    const newSalary = req.body.salary;
    const newPosition = req.body.position;
    const employeeIndex = EMPLOYEES_DB.findIndex(e => e.id === employeeId);
    if (employeeIndex < 0) {
        throw new Error('Could not find the employee');
    }
    if (newName != null) {
        EMPLOYEES_DB[employeeIndex].name = newName;
    }
    if (newSalary != null) {
        EMPLOYEES_DB[employeeIndex].salary = newSalary;
    }
    if (newPosition != null) {
        EMPLOYEES_DB[employeeIndex].position = newPosition;
    }
    resp.status(200).json({ employee: EMPLOYEES_DB[employeeIndex] });
};
exports.modifyEmployee = modifyEmployee;
