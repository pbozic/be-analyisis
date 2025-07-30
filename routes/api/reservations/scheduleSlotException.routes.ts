import express from 'express';

import ScheduleSlotExceptionController from '../../../controllers/reservation/ScheduleSlotExceptionController';
import { validate } from '../../../middleware/zod';
import {
	CreateScheduleSlotExceptionSchema,
	UpdateScheduleSlotExceptionSchema,
} from '../../../types/reservation/Schedule';

const router = express.Router();

router.get('/list/:schedule_slot_id', ScheduleSlotExceptionController.getScheduleSlotExceptionsBySlotId);
router.post(
	'/',
	validate(CreateScheduleSlotExceptionSchema),
	ScheduleSlotExceptionController.createScheduleSlotException
);
router.put(
	'/:id',
	validate(UpdateScheduleSlotExceptionSchema),
	ScheduleSlotExceptionController.updateScheduleSlotException
);
router.delete('/:id', ScheduleSlotExceptionController.deleteScheduleSlotException);
router.get('/:id', ScheduleSlotExceptionController.getScheduleSlotExceptionById);

export default router;
