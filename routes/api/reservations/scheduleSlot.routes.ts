import express from 'express';

import ScheduleSlotController from '../../../controllers/reservation/ScheduleSlotController';
import { validate } from '../../../middleware/zod';
import {
	CreateScheduleSlotSchema,
	UpdateScheduleSlotSchema,
	CreateMultipleSchedulesSchema,
	OverwriteMultipleSchedulesSchema,
	UpdateMultipleSchedulesSchema,
} from '../../../types/reservation/Schedule';
const router = express.Router();

router.get('/list/:schedule_id', ScheduleSlotController.getScheduleSlotsByScheduleId);
router.post('/', validate(CreateScheduleSlotSchema), ScheduleSlotController.createScheduleSlot);
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
router.put('/:id', validate(UpdateScheduleSlotSchema), ScheduleSlotController.updateScheduleSlot);
router.delete('/:id', ScheduleSlotController.deleteScheduleSlot);
router.get('/:id', ScheduleSlotController.getScheduleSlotById);

export default router;
