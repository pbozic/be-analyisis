// src/controllers/bookingController.ts
import { Response } from 'express';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import BookingDao from '../../dao/reservation/Booking.ts';
import {
	UpdateBookingInput,
	CreateBookingHistoryLogInput,
	ListBookingsParams,
	FindBookingSlotsInput,
	Booking,
	CreateBookingInput,
} from '../../types/reservation/Booking.ts';
import { findSlots } from '../../lib/bookingHelpers.ts';

/**
 * POST /bookings/list
 * @tag Reservation
 * @summary List bookings for the current reservation module
 * @operationId listBookings
 * @requestBody {ListBookingsParams} requestBody
 * @response 200 - Bookings retrieved
 * @responseContent {Booking[]} 200.application/json
 * @response 500 - Error retrieving bookings
 */
export async function listBookings(req: ValidatedRequest<ListBookingsParams>, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id || null;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const params: ListBookingsParams = {
			...req.body,
			reservation_module_id: reservationModuleId,
		};
		const bookings = await BookingDao.listBookingsByReservationModuleId(params);
		res.status(200).json(bookings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving bookings', error });
	}
}

/**
 * GET /bookings/{booking_id}
 * @tag Reservation
 * @summary Get a booking by ID
 * @operationId getBookingById
 * @pathParam {string} booking_id
 * @response 200 - Booking retrieved
 * @responseContent {Booking} 200.application/json
 * @response 404 - Booking not found
 * @response 500 - Error retrieving booking
 */
export async function getBooking(req: ValidatedRequest<null, { booking_id: string }>, res: Response): Promise<void> {
	try {
		const booking = await BookingDao.getBookingById({ booking_id: req.params.booking_id });
		if (!booking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving booking', error });
	}
}

/**
 * POST /bookings
 * @tag Reservation
 * @summary Create a new booking
 * @operationId createBooking
 * @requestBody {CreateBookingInput} requestBody
 * @response 201 - Booking created
 * @responseContent {Booking} 201.application/json
 * @response 500 - Error creating booking
 */
export async function createBooking(req: ValidatedRequest<CreateBookingInput>, res: Response): Promise<void> {
	// Body already validated by Zod middleware.
	const { service_ids, ...base } = req.body;

	// Enforce multi-tenant: prefer authenticated module over body to prevent tenant hopping
	const reservation_module_id = req.user?.reservation_module_id ?? base.reservation_module_id;

	const created: Booking[] = [];
	try {
		// Parent booking (first service)
		const firstServiceId = service_ids[0];
		const first = await BookingDao.createBooking({
			...base,
			reservation_module_id,
			service_id: firstServiceId as string,
		});
		created.push(first);

		const parentIdForChildren = first.booking_id;

		// Children bookings (remaining services)
		for (let i = 1; i < service_ids.length; i++) {
			const srvId = service_ids[i];
			const child = await BookingDao.createBooking({
				...base,
				reservation_module_id,
				service_id: srvId as string,
				parent_booking_id: parentIdForChildren,
			});
			created.push(child);
		}

		res.status(201).json({
			parent: first,
			children: created.slice(1),
			all: created,
		});
	} catch (error) {
		// best-effort cleanup on partial failure
		try {
			for (const row of created) await BookingDao.deleteBooking({ booking_id: row.booking_id });
		} catch (cleanupErr) {
			console.error('Cleanup after partial failure failed:', cleanupErr);
		}
		console.error('Error creating booking(s):', error);
		res.status(500).json({ message: 'Error creating booking(s)', error });
	}
}

/**
 * PUT /bookings/{booking_id}
 * @tag Reservation
 * @summary Update an existing booking
 * @operationId updateBooking
 * @pathParam {string} booking_id
 * @requestBody {UpdateBookingInput} requestBody
 * @response 200 - Booking updated
 * @responseContent {Booking} 200.application/json
 * @response 500 - Error updating booking
 */
export async function updateBooking(
	req: ValidatedRequest<UpdateBookingInput, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.updateBooking({
			...req.body,
			booking_id: req.params.booking_id,
			reservation_module_id: req.user?.reservation_module_id,
		});
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking', error });
	}
}

/**
 * DELETE /bookings/{booking_id}
 * @tag Reservation
 * @summary Delete a booking
 * @operationId deleteBooking
 * @pathParam {string} booking_id
 * @response 204 - Booking deleted
 * @response 500 - Error deleting booking
 */
export async function deleteBooking(req: ValidatedRequest<null, { booking_id: string }>, res: Response): Promise<void> {
	try {
		await BookingDao.deleteBooking({ booking_id: req.params.booking_id });
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting booking', error });
	}
}

/**
 * POST /bookings/{booking_id}/history
 * @tag Reservation
 * @summary Create a booking history log entry
 * @operationId createBookingHistoryLog
 * @pathParam {string} booking_id
 * @requestBody {CreateBookingHistoryLogInput} requestBody
 * @response 201 - Booking history log created
 * @responseContent {BookingHistoryLog} 201.application/json
 * @response 500 - Error creating booking history log
 */
export async function createBookingHistoryLog(
	req: ValidatedRequest<CreateBookingHistoryLogInput, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const log = await BookingDao.createBookingHistoryLog({
			...req.body,
			booking_id: req.params.booking_id,
			user_id: req.user?.user_id ?? undefined,
		});
		res.status(201).json(log);
	} catch (error) {
		res.status(500).json({ message: 'Error creating booking history log', error });
	}
}

/**
 * POST /bookings/find-slots
 * @tag Reservation
 * @summary Find available booking slots for given filters
 * @operationId findBookingSlots
 * @requestBody {object} requestBody
 * @property {string[]} serviceIds.required - IDs of services to check availability for
 * @property {string} [locationId] - Optional location ID
 * @property {string} [employeeId] - Optional employee ID
 * @property {string} reservationModuleId.required - Reservation module ID
 * @property {string} date.required - Date for which to find slots (ISO string)
 * @property {boolean} [returnFirst=false] - If true, return only the first available slot
 * @response 200 - Slots retrieved
 * @responseContent {any[]} 200.application/json
 * @response 500 - Error finding slots
 */
export async function findBookingSlots(req: ValidatedRequest<FindBookingSlotsInput>, res: Response): Promise<void> {
	try {
		// Destructure request body
		const { serviceIds, locationId, employeeId, reservationModuleId, date, returnFirst } = req.body;

		// Call helper function that contains the slot-finding logic
		const slots = await findSlots({
			serviceIds,
			locationId,
			employeeId,
			reservationModuleId,
			date,
			returnFirst,
		});

		// Return the found slots
		res.status(200).json(slots);
	} catch (error) {
		console.error('Error finding slots:', error);
		res.status(500).json({ message: 'Error finding slots', error });
	}
}

export default {
	listBookings,
	getBooking,
	createBooking,
	updateBooking,
	deleteBooking,
	createBookingHistoryLog,
	findBookingSlots,
};
