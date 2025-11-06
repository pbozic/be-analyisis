import express from 'express';

import ScheduleEmployeeController from '../../../controllers/reservation/ScheduleEmployeeController';
import { validate } from '../../../middleware/zod.js';
import { CreateScheduleEmployeeRequestSchema } from '../../../schemas/dto/reservations/schedule-employee/schedule-employee.dto.js';
const router = express.Router();

router.get('/list/:schedule_id', ScheduleEmployeeController.getScheduleEmployeesByScheduleId);
router.post('/', validate(CreateScheduleEmployeeRequestSchema), ScheduleEmployeeController.createScheduleEmployee);
router.put('/:id', validate(CreateScheduleEmployeeRequestSchema), ScheduleEmployeeController.updateScheduleEmployee);
router.delete('/:id', ScheduleEmployeeController.deleteScheduleEmployee);
router.get('/:id', ScheduleEmployeeController.getScheduleEmployeeById);
router.get('/schedule-slots/:schedule_id', ScheduleEmployeeController.getEmployeesByScheduleIdWithSlots);

export default router;
