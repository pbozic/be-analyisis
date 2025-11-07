import express from 'express';

import ScheduleController from '../../../controllers/reservation/ScheduleController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateScheduleRequestSchema,
	UpdateScheduleRequestSchema,
	UpdateScheduleWithEmployeesSchema,
	CreateScheduleWithEmployeesSchema,
} from '../../../schemas/dto/reservations/schedule/schedule.dto.js';
const router = express.Router();

router.get('/', ScheduleController.getSchedule);
router.post('/', [validate(CreateScheduleRequestSchema)], ScheduleController.createSchedule);
router.put('/:schedule_id', validate(UpdateScheduleRequestSchema), ScheduleController.updateSchedule);
router.put(
	'/schedule-with-employees/:schedule_id',
	validate(UpdateScheduleWithEmployeesSchema),
	ScheduleController.updateScheduleWithData
);
router.post(
	'/schedule-with-employees',
	validate(CreateScheduleWithEmployeesSchema),
	ScheduleController.createScheduleWithData
);
router.delete('/:schedule_id', ScheduleController.deleteSchedule);
router.get('/:schedule_id', ScheduleController.getScheduleById);

export default router;
