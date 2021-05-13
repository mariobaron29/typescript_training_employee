//const express = require('express');
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser'
import employeeRoutes from './routes/employees';

const app = express();

app.use(json());

app.use('/employees', employeeRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({message: err.message});
});

const port = process.env.PORT || 3000;

console.log(`Listening in port ${port}...`);
app.listen(port);