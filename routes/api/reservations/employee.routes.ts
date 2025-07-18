import express from 'express';

import EmployeeController from '../../../controllers/reservation/EmployeeController';
import { validate } from '../../../middleware/zod';
import { CreateEmployeeSchema, UpdateEmployeeSchema } from '../../../types/reservation/Employee';
const router = express.Router();

router.get('/', EmployeeController.getEmployees);
router.post('/', validate(CreateEmployeeSchema), EmployeeController.createEmployee);
router.put('/:employee_id', validate(UpdateEmployeeSchema), EmployeeController.updateEmployee);
router.delete('/:employee_id', EmployeeController.deleteEmployee);
router.get('/:employee_id', EmployeeController.getEmployeeById);

export default router;
