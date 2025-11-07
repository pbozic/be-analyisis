import express from 'express';

import BookingSlotController from '../../../controllers/reservation/BookingSlotController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateBookingSlotRequestSchema,
	UpdateBookingSlotRequestSchema,
} from '../../../schemas/dto/reservations/index.js';
import {
	CreateOrUpdateBookingSlotSchema,
	CreateScheduleSlotWithBookingSlotsSchema,
	UpdateScheduleSlotWithBookingSlotsSchema,
} from '../../../schemas/dto/reservations/schedule/schedule.dto.js';

const router = express.Router();

router.get('/list/:schedule_slot_id', BookingSlotController.getBookingSlotsByScheduleSlotId);
router.post('/', validate(CreateBookingSlotRequestSchema), BookingSlotController.createBookingSlot);
router.put('/:id', validate(UpdateBookingSlotRequestSchema), BookingSlotController.updateBookingSlot);
router.delete('/:id', BookingSlotController.deleteBookingSlot);
router.get('/:id', BookingSlotController.getBookingSlotById);
router.post(
	'/update-slots',
	validate(CreateOrUpdateBookingSlotSchema),
	BookingSlotController.updateOrCreateBookingSlots
);
router.put(
	'/update-schedule-slot-with-booking-slots/:id',
	validate(UpdateScheduleSlotWithBookingSlotsSchema),
	BookingSlotController.updateScheduleSlotWithBookingSlots
);
router.post(
	'/create-schedule-slot-with-booking-slots',
	validate(CreateScheduleSlotWithBookingSlotsSchema),
	BookingSlotController.createScheduleSlotWithBookingSlots
);

export default router;
