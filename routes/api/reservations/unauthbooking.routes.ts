// src/routes/reservation/booking.ts
import express from 'express';

import { createBooking, findBookingSlots } from '../../../controllers/reservation/BookingController.ts';
import { validate } from '../../../middleware/zod';
import {
	CreateBookingRequestSchema,
	FindBookingSlotsSchema,
} from '../../../schemas/dto/reservations/booking/booking.dto.js';
import { GetBookingDataRequestSchema } from '../../../schemas/dto/reservations/reservation-module/reservation-module.dto.js';
import ReservationModuleController from '../../../controllers/reservation/ReservationModuleController.ts';
import CustomerController from '../../../controllers/reservation/CustomerController.ts';
const router = express.Router();

/**
 * Create booking
 * POST /booking
 */
router.post('/', validate(CreateBookingRequestSchema), createBooking);

/**
 * Find available slots
 * POST /booking/find-slots
 */
router.post('/find-slots', [validate(FindBookingSlotsSchema)], findBookingSlots);

/**
 * Get data necessary for the booking process
 * POST /booking/booking-data
 */
router.post(
	'/booking-data',
	validate(GetBookingDataRequestSchema),
	ReservationModuleController.getReservationModuleBookingDataByHashOrBusinessId
);

/**
 * Get data necessary for the booking process
 * POST /booking/booking-data
 */
router.get('/customer/:code', CustomerController.getCustomerByCode);

export default router;
