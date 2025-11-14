import { Response } from 'express';

import BookingSlotDao from '../../dao/reservation/BookingSlot';
import { ValidatedRequest } from '../../types/validatedRequest';
import type {
	CreateBookingSlotRequest,
	UpdateBookingSlotRequest,
} from '../../schemas/dto/reservations/booking-slot/booking-slot.dto';
import type {
	CreateOrUpdateBookingSlot,
	CreateScheduleSlotWithBookingSlots,
	UpdateScheduleSlotWithBookingSlots,
} from '../../schemas/dto/reservations/schedule/schedule.dto';
import ScheduleSlotDao from '../../dao/reservation/ScheduleSlot';
import { splitByBookingId } from '../../lib/bookingHelpers';

// Import DTO types for API documentation
//import type { BookingSlotResponse } from '../../schemas/dto/reservations/booking-slot/booking-slot.dto.js';
//import type { ScheduleSlotResponse } from '../../schemas/dto/reservations/schedule-slot/schedule-slot.dto.js';

/**
 * GET /reservation/booking-slots/list/:schedule_slot_id
 * @tag Reservation
 * @summary Get all booking slots by schedule slot ID
 * @description Retrieves all booking slots for a given schedule slot ID.
 * @operationId getBookingSlotsByScheduleSlot
 * @pathParam {string} schedule_slot_id - The ID of the schedule slot.
 * @response 200 - Booking slots retrieved successfully
 * @responseContent {BookingSlotResponse[]} 200.application/json
 * @response 500 - Error retrieving booking slots
 * @prisma_model booking_slots
 */
export async function getBookingSlotsByScheduleSlotId(
	req: ValidatedRequest<null, { schedule_slot_id: string }>,
	res: Response
): Promise<void> {
	try {
		const scheduleSlotId = req.params.schedule_slot_id;
		const records = await BookingSlotDao.getBookingSlotsByScheduleSlotId(scheduleSlotId);
		res.status(200).json(records);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving booking slots', error: message });
	}
}

/**
 * POST /reservation/booking-slots
 * @tag Reservation
 * @summary Create a new booking slot
 * @description Creates a new booking slot.
 * @operationId createBookingSlot
 * @bodyContent {CreateBookingSlotRequest} application/json
 * @response 201 - Booking slot created successfully
 * @responseContent {BookingSlotResponse} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating booking slot
 * @prisma_model booking_slots
 */
export async function createBookingSlot(req: ValidatedRequest<CreateBookingSlotRequest>, res: Response): Promise<void> {
	try {
		const record = await BookingSlotDao.createBookingSlot(req.body);
		res.status(201).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating booking slot', error: message });
	}
}

/**
 * PUT /reservation/booking-slots/:id
 * @tag Reservation
 * @summary Update a booking slot
 * @description Updates an existing booking slot.
 * @operationId updateBookingSlot
 * @pathParam {string} id - The ID of the booking slot to update.
 * @bodyContent {object} application/json
 * @response 200 - Booking slot updated successfully
 * @responseContent {BookingSlotResponse} 200.application/json
 * @response 404 - Booking slot not found
 * @response 500 - Error updating booking slot
 * @prisma_model booking_slots
 */
export async function updateBookingSlot(
	req: ValidatedRequest<UpdateBookingSlotRequest, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await BookingSlotDao.updateBookingSlot(req.params.id, req.body);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating booking slot', error: message });
	}
}

/**
 * DELETE /reservation/booking-slots/:id
 * @tag Reservation
 * @summary Delete a booking slot
 * @description Deletes a booking slot by its ID.
 * @operationId deleteBookingSlot
 * @pathParam {string} id - The ID of the booking slot to delete.
 * @response 204 - Booking slot deleted successfully
 * @response 404 - Booking slot not found
 * @response 500 - Error deleting booking slot
 * @prisma_model booking_slots
 */
export async function deleteBookingSlot(req: ValidatedRequest<null, { id: string }>, res: Response): Promise<void> {
	try {
		await BookingSlotDao.deleteBookingSlot(req.params.id);
		res.status(204).send();
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deleting booking slot', error: message });
	}
}

/**
 * GET /reservation/booking-slots/:id
 * @tag Reservation
 * @summary Get a booking slot by ID
 * @description Retrieves a booking slot by its ID.
 * @operationId getBookingSlotById
 * @pathParam {string} id - The ID of the booking slot to retrieve.
 * @response 200 - Booking slot retrieved successfully
 * @responseContent {BookingSlotResponse} 200.application/json
 * @response 404 - Booking slot not found
 * @response 500 - Error retrieving booking slot
 * @prisma_model booking_slots
 */
export async function getBookingSlotById(req: ValidatedRequest<null, { id: string }>, res: Response): Promise<void> {
	try {
		const record = await BookingSlotDao.getBookingSlotById(req.params.id);
		if (!record) {
			res.status(404).json({ message: 'Booking slot not found' });
			return;
		}
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving booking slot', error: message });
	}
}

/**
 * POST /reservation/booking-slots/update-slots
 * @tag Reservation
 * @summary Create a new booking slot or update an existing one
 * @description Creates a new booking slot or updates an existing one if it already exists.
 * @operationId updateOrCreateBookingSlots
 * @requestBody {CreateOrUpdateBookingSlot} requestBody - The booking slot data to create or update.
 * @response 201 - Booking slots created or updated successfully
 * @responseContent {{updatedSlots: BookingSlotResponse[], createdSlots: BookingSlotResponse[], removedSlots: void[]}} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating booking slot
 * @prisma_model booking_slots
 */
export async function updateOrCreateBookingSlots(
	req: ValidatedRequest<CreateOrUpdateBookingSlot>,
	res: Response
): Promise<void> {
	try {
		const { withBookingId, withoutBookingId } = splitByBookingId(req.body.bookingSlots.newOrChanged);
		const updatedSlots = await Promise.all(
			withBookingId.map(async (el) => {
				let data = await BookingSlotDao.updateBookingSlot(el.booking_slot_id, el);
				return {
					data,
				};
			})
		);
		const createdSlots = await Promise.all(
			withoutBookingId.map(async (el) => {
				let data = await BookingSlotDao.createBookingSlot(el);
				return {
					data,
				};
			})
		);
		const removedSlots = await Promise.all(
			req.body.bookingSlots.removed.map(async (el) => {
				let data = await BookingSlotDao.deleteBookingSlot(el.booking_slot_id);
				return {
					data,
				};
			})
		);
		const record = { updatedSlots, createdSlots, removedSlots };
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating booking slot', error: message });
	}
}

/**
 * POST /reservation/booking-slots/create-schedule-slot-with-booking-slots
 * @tag Reservation
 * @summary Create a new schedule slot with booking slots
 * @description Creates a new schedule slot and associated booking slots.
 * @operationId createScheduleSlotWithBookingSlots
 * @bodyContent {CreateScheduleSlotWithBookingSlots} application/json
 * @response 201 - Schedule slot with booking slots created successfully
 * @responseContent {{schedule_slot: ScheduleSlotResponse & {booking_slots: BookingSlotResponse[]}}} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule slot with booking slots
 * @prisma_model schedule_slot
 * @prisma_model booking_slots
 */
export async function createScheduleSlotWithBookingSlots(
	req: ValidatedRequest<CreateScheduleSlotWithBookingSlots>,
	res: Response
): Promise<void> {
	try {
		const { schedule, bookingSlots } = req.body;
		const createdScheduleSlot = await ScheduleSlotDao.createScheduleSlot(schedule);
		const schedule_slot_id = createdScheduleSlot.schedule_slot_id;
		const withoutId = bookingSlots;
		const bookingSlotsToCreate = withoutId.map((el) => ({
			...el,
			schedule_slot_id,
		}));
		const createdSlots = await Promise.all(
			bookingSlotsToCreate.map(async (el) => {
				let data = await BookingSlotDao.createBookingSlot(el);
				return {
					data,
				};
			})
		);

		const record = {
			schedule_slot: {
				...createdScheduleSlot,
				booking_slots: createdSlots,
			},
		};
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating booking slot', error: message });
	}
}

/**
 * PUT /reservation/booking-slots/update-schedule-slot-with-booking-slots:id
 * @tag Reservation
 * @summary Update a schedule slot with booking slots
 * @description Updates schedule slot and associated booking slots.
 * @operationId updateScheduleSlotWithBookingSlots
 * @requestBody {UpdateScheduleSlotWithBookingSlots} requestBody - The schedule slot and booking slots data to update.
 * @response 201 - Schedule slot with booking slots updated successfully
 * @responseContent {{schedule_slot: ScheduleSlotResponse, booking_slots: (BookingSlotResponse | void)[]}} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating schedule slot with booking slots
 * @prisma_model schedule_slot
 * @prisma_model booking_slots
 */
export async function updateScheduleSlotWithBookingSlots(
	req: ValidatedRequest<UpdateScheduleSlotWithBookingSlots, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotDao.updateScheduleSlot(req.params.id, req.body.schedule);
		const { withBookingId, withoutBookingId } = splitByBookingId(req.body.bookingSlots.newOrChanged);
		const updatedSlots = await Promise.all(
			withBookingId.map(async (el) => {
				let data = await BookingSlotDao.updateBookingSlot(el.booking_slot_id, el);
				return {
					data,
				};
			})
		);
		const createdSlots = await Promise.all(
			withoutBookingId.map(async (el) => {
				let data = await BookingSlotDao.createBookingSlot(el);
				return {
					data,
				};
			})
		);
		const removedSlots = await Promise.all(
			req.body.bookingSlots.removed.map(async (el) => {
				let data = await BookingSlotDao.deleteBookingSlot(el.booking_slot_id);
				return {
					data,
				};
			})
		);

		const data = {
			schedule_slot: record,
			booking_slots: [...updatedSlots, ...createdSlots, ...removedSlots],
		};
		res.status(200).json(data);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating booking slot', error: message });
	}
}

export default {
	getBookingSlotsByScheduleSlotId,
	createBookingSlot,
	updateBookingSlot,
	deleteBookingSlot,
	getBookingSlotById,
	updateOrCreateBookingSlots,
	createScheduleSlotWithBookingSlots,
	updateScheduleSlotWithBookingSlots,
};
