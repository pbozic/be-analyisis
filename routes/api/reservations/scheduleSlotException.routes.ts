import express from 'express';

import ScheduleSlotExceptionController from '../../../controllers/reservation/ScheduleSlotExceptionController';
import { validate } from '../../../middleware/zod';
import {
	CreateScheduleSlotExceptionSchema,
	UpdateScheduleSlotExceptionSchema,
	CreateOrUpdateExceptionsSchema,
	CreateOrUpdateExceptionsAndBookingsSchema,
	CreateScheduleSlotWithExceptionsAndBookingSlotsSchema,
	UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema,
} from '../../../types/reservations/Schedule';

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
router.post(
	'/update-exceptions',
	validate(CreateOrUpdateExceptionsSchema),
	ScheduleSlotExceptionController.updateOrCreateScheduleSlotExceptions
);
router.post(
	'/update-exceptions-booking-slots',
	validate(CreateOrUpdateExceptionsAndBookingsSchema),
	ScheduleSlotExceptionController.updateOrCreateScheduleSlotExceptionsAndBookingSlots
);
router.post(
	'/create-schedule-slot-with-booking-slots-and-exceptions',
	validate(CreateScheduleSlotWithExceptionsAndBookingSlotsSchema),
	ScheduleSlotExceptionController.createScheduleSlotWithBookingSlotsAndExceptions
);
router.put(
	'/update-schedule-slot-with-booking-slots-and-exceptions/:id',
	validate(UpdateScheduleSlotWithBookingSlotsAndExceptionsSchema),
	ScheduleSlotExceptionController.updateScheduleSlotWithBookingSlotsAndExceptions
);
export default router;
