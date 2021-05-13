import {Router} from 'express';
import {createEmployee, getEmployees, getEmployeeById, deleteEmployee,modifyEmployee} from '../controllers/employees';

const router = Router();

router.post('/',createEmployee);

router.get('/', getEmployees);

router.get('/:id', getEmployeeById);

router.patch('/:id', modifyEmployee);

router.delete('/:id', deleteEmployee);

export default router;