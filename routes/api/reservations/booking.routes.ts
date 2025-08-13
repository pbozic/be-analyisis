// src/routes/reservation/booking.ts
import express from 'express';

import {
	listBookings,
	getBooking,
	createBooking,
	updateBooking,
	deleteBooking,
	createBookingHistoryLog,
	findBookingSlots,
} from '../../../controllers/reservation/BookingController.ts';
import { validate } from '../../../middleware/zod';
import {
	ListBookingsParamsSchema,
	CreateBookingSchema,
	UpdateBookingSchema,
	FindBookingSlotsSchema,
} from '../../../types/reservation/Booking.ts';
const router = express.Router();

/**
 * Booking search (body-based filters)
 * POST /bookings/list
 */
router.post('/bookings/list', [validate(ListBookingsParamsSchema)], listBookings);

/**
 * Create booking
 * POST /bookings
 */
router.post('/bookings', validate(CreateBookingSchema), createBooking);

/**
 * Get booking by id
 * GET /bookings/:booking_id
 */
router.get('/bookings/:booking_id', getBooking);

/**
 * Update booking
 * PUT /bookings/:booking_id
 */
router.put('/bookings/:booking_id', [validate(UpdateBookingSchema)], updateBooking);

/**
 * Delete booking
 * DELETE /bookings/:booking_id
 */
router.delete('/bookings/:booking_id', deleteBooking);

/**
 * Create booking history log
 * POST /bookings/:booking_id/history
 */
router.post('/bookings/:booking_id/history', createBookingHistoryLog);

/**
 * Find available slots
 * POST /find-slots
 */
router.post('/find-slots', [validate(FindBookingSlotsSchema)], findBookingSlots);

export default router;
