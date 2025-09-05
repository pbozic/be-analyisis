// src/routes/reservation/booking.ts
import express from 'express';

import {
	listBookings,
	getBooking,
	updateBooking,
	deleteBooking,
	createBookingHistoryLog,
	getLocationsAndEmployees,
	getBookingsForLocationAndEmployees,
	getServicesAndEmployees,
	createBookingAdmin,
	updateBookingStartAdmin,
	getBookingAdmin,
	updateBookingStartGroupAdmin,
	updateBookingStartFirstInGroupAdmin,
	updateBookingGroupAdmin,
} from '../../../controllers/reservation/BookingController.ts';
import { validate } from '../../../middleware/zod';
import {
	ListBookingsParamsSchema,
	UpdateBookingSchema,
	AllBookingsForLocationAndEmployeesSchema,
	CreateMultipleBookingsSchema,
	UpdateMultipleBookingsSchema,
} from '../../../types/reservation/Booking.ts';

const router = express.Router();

/**
 * Booking search (body-based filters)
 * POST /bookings/list
 */
router.post('/bookings/list', [validate(ListBookingsParamsSchema)], listBookings);

router.post(
	'/bookings/bookings-locations-and-employees',
	[validate(AllBookingsForLocationAndEmployeesSchema)],
	getBookingsForLocationAndEmployees
);

router.post('/bookings/create-booking-admin', [validate(CreateMultipleBookingsSchema)], createBookingAdmin);

router.get('/bookings/locations-and-employees', getLocationsAndEmployees);
router.get('/bookings/services-and-employees', getServicesAndEmployees);
router.get('/bookings/get-booking-admin/:booking_id', getBookingAdmin);
/**
 * Get booking by id
 * GET /bookings/:booking_id
 */
router.get('/bookings/:booking_id', getBooking);

/**
 * Update booking
 * PUT /bookings/:booking_id
 */
router.put(
	'/bookings/update-booking-start-admin/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartAdmin
);
router.put(
	'/bookings/update-booking-start-admin-group/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartGroupAdmin
);
router.put(
	'/bookings/update-booking-start-first-group-admin/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartFirstInGroupAdmin
);
router.put('/bookings/update-bookings-admin', [validate(UpdateMultipleBookingsSchema)], updateBookingGroupAdmin);

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

export default router;
