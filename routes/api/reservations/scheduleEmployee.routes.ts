import express from 'express';

import ScheduleEmployeeController from '../../../controllers/reservation/ScheduleEmployeeController';
import { validate } from '../../../middleware/zod';
import { CreateScheduleEmployeeSchema, UpdateScheduleEmployeeSchema } from '../../../types/reservations/Schedule';
const router = express.Router();

router.get('/list/:schedule_id', ScheduleEmployeeController.getScheduleEmployeesByScheduleId);
router.post('/', validate(CreateScheduleEmployeeSchema), ScheduleEmployeeController.createScheduleEmployee);
router.put('/:id', validate(UpdateScheduleEmployeeSchema), ScheduleEmployeeController.updateScheduleEmployee);
router.delete('/:id', ScheduleEmployeeController.deleteScheduleEmployee);
router.get('/:id', ScheduleEmployeeController.getScheduleEmployeeById);
router.get('/schedule-slots/:schedule_id', ScheduleEmployeeController.getEmployeesByScheduleIdWithSlots);

export default router;
