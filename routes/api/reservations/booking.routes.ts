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
	getBookingsAnalytics,
	listBookingsCoursesByReservationModuleId,
	listBookingsCourses,
	getBookingCourse,
	createBookingCourse,
	updateBookingCourse,
	newBookingCourseParticipant,
	cancelBookingCourseParticipant,
} from '../../../controllers/reservation/BookingController.ts';
import { validate } from '../../../middleware/zod';
import {
	ListBookingsParamsSchema,
	UpdateBookingSchema,
	AllBookingsForLocationAndEmployeesSchema,
	CreateMultipleBookingsSchema,
	UpdateMultipleBookingsSchema,
	BookingsAnalyticsSchema,
	CreateBookingCourseSchema,
	UpdateBookingCourseSchema,
	CreateCourseParticipantSchema,
	UpdateCourseParticipantSchema,
} from '../../../types/reservations/Booking.ts';

const router = express.Router();

/**
 * Booking search (body-based filters)
 * POST /bookings/list
 */
router.post('/bookings/list', [validate(ListBookingsParamsSchema)], listBookings);
/**
 * Booking analytics (body-based filters)
 * POST /bookings/analytics
 */
router.post('/bookings/analytics', [validate(BookingsAnalyticsSchema)], getBookingsAnalytics);

/**
 * Get bookings for locations and employees (body-based filters)
 * POST /bookings/bookings-locations-and-employees
 */
router.post(
	'/bookings/bookings-locations-and-employees',
	[validate(AllBookingsForLocationAndEmployeesSchema)],
	getBookingsForLocationAndEmployees
);

/**
 * Create bookings (admin)
 * POST /bookings/create-booking-admin
 */
router.post('/bookings/create-booking-admin', [validate(CreateMultipleBookingsSchema)], createBookingAdmin);

/**
 * List locations and employees for bookings
 * GET /bookings/locations-and-employees
 */
router.get('/bookings/locations-and-employees', getLocationsAndEmployees);
/**
 * List services and employees for bookings
 * GET /bookings/services-and-employees
 */
router.get('/bookings/services-and-employees', getServicesAndEmployees);
/**
 * Get booking (admin view)
 * GET /bookings/get-booking-admin/:booking_id
 */
router.get('/bookings/get-booking-admin/:booking_id', getBookingAdmin);
/**
 * Get booking by id
 * GET /bookings/:booking_id
 */
router.get('/bookings/:booking_id', getBooking);

/**
 * Update booking start (admin)
 * PUT /bookings/update-booking-start-admin/:booking_id
 */
router.put(
	'/bookings/update-booking-start-admin/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartAdmin
);
/**
 * Update booking start for group (admin)
 * PUT /bookings/update-booking-start-admin-group/:booking_id
 */
router.put(
	'/bookings/update-booking-start-admin-group/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartGroupAdmin
);
/**
 * Update booking start for first in group (admin)
 * PUT /bookings/update-booking-start-first-group-admin/:booking_id
 */
router.put(
	'/bookings/update-booking-start-first-group-admin/:booking_id',
	[validate(UpdateBookingSchema)],
	updateBookingStartFirstInGroupAdmin
);
/**
 * Bulk update bookings (admin)
 * PUT /bookings/update-bookings-admin
 */
router.put('/bookings/update-bookings-admin', [validate(UpdateMultipleBookingsSchema)], updateBookingGroupAdmin);

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
 * List course bookings for reservation module (body-based filters)
 * POST /bookings-courses-res/list
 */
router.post(
	'/bookings-courses-res/list',
	[validate(ListBookingsParamsSchema)],
	listBookingsCoursesByReservationModuleId
);

/**
 * List course bookings (global/body-based filters)
 * POST /bookings-courses/list
 */
router.post('/bookings-courses/list', [validate(ListBookingsParamsSchema)], listBookingsCourses);

/**
 * Get a course booking by id
 * GET /bookings-course/:booking_id
 */
router.get('/bookings-course/:booking_id', getBookingCourse);

/**
 * Create a booking course
 * POST /bookings-course
 */
router.post('/bookings-course', [validate(CreateBookingCourseSchema)], createBookingCourse);

/**
 * Update a booking course
 * PUT /bookings-course/:booking_id
 */
router.put('/bookings-course/:booking_id', [validate(UpdateBookingCourseSchema)], updateBookingCourse);

/**
 * Create a course participant
 * POST /bookings-course-participant
 */
router.post('/bookings-course-participant', [validate(CreateCourseParticipantSchema)], newBookingCourseParticipant);

/**
 * Cancel a course participant
 * PUT /bookings-course-participant/cancel
 */
router.put(
	'/bookings-course-participant/cancel',
	[validate(UpdateCourseParticipantSchema)],
	cancelBookingCourseParticipant
);

export default router;
