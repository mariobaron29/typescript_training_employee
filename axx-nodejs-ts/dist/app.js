"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const employees_1 = __importDefault(require("./routes/employees"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/employees', employees_1.default);
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err.message });
});
const port = process.env.PORT || 3000;
console.log(`Listening in port ${port}...`);
app.listen(port);
