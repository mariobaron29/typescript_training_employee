"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Position = void 0;
var Position;
(function (Position) {
    Position[Position["CEO"] = 0] = "CEO";
    Position[Position["COO"] = 1] = "COO";
    Position[Position["CFO"] = 2] = "CFO";
    Position[Position["CTO"] = 3] = "CTO";
    Position[Position["Developer"] = 4] = "Developer";
})(Position = exports.Position || (exports.Position = {}));
class Employee {
    constructor(id, name, salary, position) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}
exports.Employee = Employee;
