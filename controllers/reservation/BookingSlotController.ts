import { Response } from 'express';

import BookingSlotDao from '../../dao/reservation/BookingSlot';
import { ValidatedRequest } from '../../types/validatedRequest';
import { CreateBookingSlotInput, UpdateBookingSlotSchemaInput } from '../../types/reservation/Schedule';

/**
 * GET /reservation/booking-slots/list/:schedule_slot_id
 * @tag Reservation
 * @summary Get all booking slots by schedule slot ID
 * @description Retrieves all booking slots for a given schedule slot ID.
 * @operationId getBookingSlotsByScheduleSlot
 * @pathParam {string} schedule_slot_id - The ID of the schedule slot.
 * @response 200 - Booking slots retrieved successfully
 * @responseContent {BookingSlot[]} 200.application/json
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
		res.status(500).json({ message: 'Error retrieving booking slots', error });
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
 * @responseContent {BookingSlot} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating booking slot
 */
export async function createBookingSlot(req: ValidatedRequest<CreateBookingSlotInput>, res: Response): Promise<void> {
	try {
		const record = await BookingSlotDao.createBookingSlot(req.body);
		res.status(201).json(record);
	} catch (error) {
		res.status(500).json({ message: 'Error creating booking slot', error });
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
 * @responseContent {BookingSlot} 200.application/json
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
		res.status(500).json({ message: 'Error updating booking slot', error });
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
		res.status(500).json({ message: 'Error deleting booking slot', error });
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
 * @responseContent {BookingSlot} 200.application/json
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
		res.status(500).json({ message: 'Error retrieving booking slot', error });
	}
}

export default {
	getBookingSlotsByScheduleSlotId,
	createBookingSlot,
	updateBookingSlot,
	deleteBookingSlot,
	getBookingSlotById,
};
