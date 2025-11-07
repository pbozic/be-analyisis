import express from 'express';

import ScheduleSlotController from '../../../controllers/reservation/ScheduleSlotController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateScheduleSlotRequestSchema,
	UpdateScheduleSlotRequestSchema,
} from '../../../schemas/dto/reservations/schedule-slot/schedule-slot.dto.js';
import {
	CreateMultipleSchedulesSchema,
	OverwriteMultipleSchedulesSchema,
	UpdateMultipleSchedulesSchema,
} from '../../../schemas/dto/reservations/schedule/schedule.dto.js';
const router = express.Router();

router.get('/list/:schedule_id', ScheduleSlotController.getScheduleSlotsByScheduleId);
router.post('/', validate(CreateScheduleSlotRequestSchema), ScheduleSlotController.createScheduleSlot);
router.post(
	'/create-multiple-schedules',
	[validate(CreateMultipleSchedulesSchema)],
	ScheduleSlotController.createMultipleSchedules
);
router.post(
	'/overwrite-multiple-schedules',
	[validate(OverwriteMultipleSchedulesSchema)],
	ScheduleSlotController.overwriteMultipleSchedules
);
router.put(
	'/update-multiple-schedules/:id',
	validate(UpdateMultipleSchedulesSchema),
	ScheduleSlotController.updateMultipleSchedules
);
router.put('/:id', validate(UpdateScheduleSlotRequestSchema), ScheduleSlotController.updateScheduleSlot);
router.delete('/:id', ScheduleSlotController.deleteScheduleSlot);
router.get('/:id', ScheduleSlotController.getScheduleSlotById);

export default router;
