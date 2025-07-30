import express from 'express';

import BookingSlotController from '../../../controllers/reservation/BookingSlotController';
import { validate } from '../../../middleware/zod';
import { CreateBookingSlotSchema, UpdateCreateBookingSlotSchema } from '../../../types/reservation/Schedule';

const router = express.Router();

router.get('/list/:schedule_slot_id', BookingSlotController.getBookingSlotsByScheduleSlotId);
router.post('/', validate(CreateBookingSlotSchema), BookingSlotController.createBookingSlot);
router.put('/:id', validate(UpdateCreateBookingSlotSchema), BookingSlotController.updateBookingSlot);
router.delete('/:id', BookingSlotController.deleteBookingSlot);
router.get('/:id', BookingSlotController.getBookingSlotById);

export default router;
