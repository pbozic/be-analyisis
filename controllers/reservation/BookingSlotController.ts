import { Response } from 'express';

import BookingSlotDao from '../../dao/reservation/BookingSlot';
import { ValidatedRequest } from '../../types/validatedRequest';
import {
	CreateBookingSlotInput,
	UpdateBookingSlotSchemaInput,
	CreateOrUpdateBookingSlotInput,
	CreateScheduleSlotWithBookingSlotsInput,
	UpdateScheduleSlotWithBookingSlotsInput,
} from '../../types/reservation/Schedule';
import ScheduleSlotDao from '../../dao/reservation/ScheduleSlot';
import { splitByBookingId } from '../../lib/bookingHelpers';

/**
 * GET /reservation/booking-slots/list/:schedule_slot_id
 * @tag Reservation
 * @summary Get all booking slots by schedule slot ID
 * @description Retrieves all booking slots for a given schedule slot ID.
 * @operationId getBookingSlotsByScheduleSlot
 * @pathParam {string} schedule_slot_id - The ID of the schedule slot.
 * @response 200 - Booking slots retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving booking slots
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
 * @requestBody {CreateBookingSlotInput} requestBody - The booking slot data to create.
 * @response 201 - Booking slot created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating booking slot
 */
export async function createBookingSlot(req: ValidatedRequest<CreateBookingSlotInput>, res: Response): Promise<void> {
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
 * @requestBody {UpdateBookingSlotSchemaInput} requestBody - The data to update the slot with.
 * @response 200 - Booking slot updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Booking slot not found
 * @response 500 - Error updating booking slot
 */
export async function updateBookingSlot(
	req: ValidatedRequest<UpdateBookingSlotSchemaInput, { id: string }>,
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
 * @responseContent {object} 200.application/json
 * @response 404 - Booking slot not found
 * @response 500 - Error retrieving booking slot
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
 * POST /reservation/booking-slots/update-or-create
 * @tag Reservation
 * @summary Create a new booking slot or update an existing one
 * @description Creates a new booking slot or updates an existing one if it already exists.
 * @operationId updateOrCreateBookingSlots
 * @requestBody {CreateOrUpdateBookingSlotInput} requestBody - The booking slot data to create or update.
 * @response 201 - Booking slots created or updated successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating booking slot
 */
export async function updateOrCreateBookingSlots(
	req: ValidatedRequest<CreateOrUpdateBookingSlotInput>,
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
 * @requestBody {CreateScheduleSlotWithBookingSlotsInput} requestBody - The schedule slot and booking slots data to create.
 * @response 201 - Schedule slot with booking slots created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule slot with booking slots
 */
export async function createScheduleSlotWithBookingSlots(
	req: ValidatedRequest<CreateScheduleSlotWithBookingSlotsInput>,
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
 * @summary Update a new schedule slot with booking slots
 * @description Updates schedule slot and associated booking slots.
 * @operationId updateScheduleSlotWithBookingSlots
 * @requestBody {UpdateScheduleSlotWithBookingSlotsInput} requestBody - The schedule slot and booking slots data to update.
 * @response 201 - Schedule slot with booking slots updated successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating schedule slot with booking slots
 */
export async function updateScheduleSlotWithBookingSlots(
	req: ValidatedRequest<UpdateScheduleSlotWithBookingSlotsInput, { id: string }>,
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
