import express from 'express';

import EmployeeController from '../../../controllers/reservation/EmployeeController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateEmployeeRequestSchema,
	UpdateEmployeeRequestSchema,
} from '../../../schemas/dto/reservations/employee/employee.dto.js';
import { BookingsAnalyticsSchema } from '../../../schemas/dto/reservations/booking/booking.dto.js';
const router = express.Router();

router.get('/', EmployeeController.getEmployees);
router.delete('/:employee_id', EmployeeController.deleteEmployee);
router.post('/employees-with-schedule-slots', EmployeeController.getEmployeesWithScheduleSlots);
router.post(
	'/with-schedules/:employee_id',
	[validate(BookingsAnalyticsSchema)],
	EmployeeController.getEmployeeByIdWithSchedules
);
router.get('/:employee_id', EmployeeController.getEmployeeById);
router.post('/', [validate(CreateEmployeeRequestSchema)], EmployeeController.createEmployee);
router.put('/:employee_id', validate(UpdateEmployeeRequestSchema), EmployeeController.updateEmployee);

export default router;
