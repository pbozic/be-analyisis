import express from 'express';

import EmployeeController from '../../../controllers/reservation/EmployeeController';
import { validate } from '../../../middleware/zod';
import { CreateEmployeeSchema, UpdateEmployeeSchema } from '../../../types/reservations/Employee';
import { BookingsAnalyticsSchema } from '../../../types/reservations/Booking.ts';
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
router.post('/', [validate(CreateEmployeeSchema)], EmployeeController.createEmployee);
router.put('/:employee_id', validate(UpdateEmployeeSchema), EmployeeController.updateEmployee);

export default router;
