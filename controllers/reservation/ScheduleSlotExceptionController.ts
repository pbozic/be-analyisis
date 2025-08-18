import { Response } from 'express';

import ScheduleSlotExceptionDao from '../../dao/reservation/ScheduleSlotException';
import { ValidatedRequest } from '../../types/validatedRequest';
import {
	CreateScheduleSlotExceptionInput,
	UpdateScheduleSlotExceptionInput,
	CreateOrUpdateExceptionsInput,
	CreateOrUpdateExceptionsAndBookingsInput,
	CreateScheduleSlotWithExceptionsAndBookingSlotsInput,
	UpdateScheduleSlotWithBookingSlotsAndExceptionsInput,
} from '../../types/reservation/Schedule';
import BookingSlotDao from '../../dao/reservation/BookingSlot';
import ScheduleSlotDao from '../../dao/reservation/ScheduleSlot';
import { splitByBookingId, splitByExceptionsId } from '../../lib/bookingHelpers';

/**
 * GET /reservation/schedule-slot-exceptions/list/{schedule_slot_id}
 * @tag Reservation
 * @summary Get all exceptions by schedule slot ID
 * @description Retrieves all schedule slot exceptions for a given schedule slot ID.
 * @operationId getScheduleSlotExceptionsBySlot
 * @pathParam {string} schedule_slot_id - The ID of the schedule slot.
 * @response 200 - Exceptions retrieved successfully
 * @responseContent {ScheduleSlotException[]} 200.application/json
 * @response 500 - Error retrieving exceptions
 */
export async function getScheduleSlotExceptionsBySlotId(
	req: ValidatedRequest<null, { schedule_slot_id: string }>,
	res: Response
): Promise<void> {
	try {
		const records = await ScheduleSlotExceptionDao.getExceptionsByScheduleSlotId(req.params.schedule_slot_id);
		res.status(200).json(records);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule slot exceptions', error: message });
	}
}

/**
 * POST /reservation/schedule-slot-exceptions
 * @tag Reservation
 * @summary Create a new schedule slot exception
 * @description Creates a new exception for a schedule slot.
 * @operationId createScheduleSlotException
 * @requestBody {CreateScheduleSlotExceptionInput} requestBody - The exception data to create.
 * @response 201 - Exception created successfully
 * @responseContent {ScheduleSlotException} 201.application/json
 * @response 500 - Error creating exception
 */
export async function createScheduleSlotException(
	req: ValidatedRequest<CreateScheduleSlotExceptionInput>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotExceptionDao.createScheduleSlotException(req.body);
		res.status(201).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule slot exception', error: message });
	}
}

/**
 * PUT /reservation/schedule-slot-exceptions/{id}
 * @tag Reservation
 * @summary Update a schedule slot exception
 * @description Updates an existing schedule slot exception.
 * @operationId updateScheduleSlotException
 * @pathParam {string} id - The ID of the exception to update.
 * @requestBody {UpdateScheduleSlotExceptionInput} requestBody - The data to update the exception with.
 * @response 200 - Exception updated successfully
 * @responseContent {ScheduleSlotException} 200.application/json
 * @response 404 - Exception not found
 * @response 500 - Error updating exception
 */
export async function updateScheduleSlotException(
	req: ValidatedRequest<UpdateScheduleSlotExceptionInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotExceptionDao.updateScheduleSlotException(req.params.id, req.body);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating schedule slot exception', error: message });
	}
}

/**
 * DELETE /reservation/schedule-slot-exceptions/{id}
 * @tag Reservation
 * @summary Delete a schedule slot exception
 * @description Deletes a schedule slot exception by its ID.
 * @operationId deleteScheduleSlotException
 * @pathParam {string} id - The ID of the exception to delete.
 * @response 204 - Exception deleted successfully
 * @response 500 - Error deleting exception
 */
export async function deleteScheduleSlotException(
	req: ValidatedRequest<null, { id: string }>,
	res: Response
): Promise<void> {
	try {
		await ScheduleSlotExceptionDao.deleteScheduleSlotException(req.params.id);
		res.status(204).send();
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deleting schedule slot exception', error: message });
	}
}

/**
 * GET /reservation/schedule-slot-exceptions/{id}
 * @tag Reservation
 * @summary Get a schedule slot exception by ID
 * @description Retrieves a schedule slot exception by its ID.
 * @operationId getScheduleSlotExceptionById
 * @pathParam {string} id - The ID of the exception to retrieve.
 * @response 200 - Exception retrieved successfully
 * @responseContent {ScheduleSlotException} 200.application/json
 * @response 404 - Exception not found
 * @response 500 - Error retrieving exception
 */
export async function getScheduleSlotExceptionById(
	req: ValidatedRequest<null, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotExceptionDao.getScheduleSlotExceptionById(req.params.id);
		if (!record) {
			res.status(404).json({ message: 'Schedule slot exception not found' });
			return;
		}
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule slot exception', error: message });
	}
}

/**
 * POST /reservation/schedule-slot-exceptions/update-exceptions
 * @tag Reservation
 * @summary Create a new schedule slot exception or update an existing one
 * @description Creates a new schedule slot exception or updates an existing one based on the provided data.
 * @operationId updateOrCreateScheduleSlotExceptions
 * @requestBody {CreateOrUpdateExceptionsInput} requestBody - The exception data to create or update.
 * @response 201 - Schedule slot exceptions created or updated successfully
 * @responseContent {ScheduleSlotException} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating or creating schedule slot exceptions
 */
export async function updateOrCreateScheduleSlotExceptions(
	req: ValidatedRequest<CreateOrUpdateExceptionsInput>,
	res: Response
): Promise<void> {
	try {
		const { withExceptionId, withoutExceptionId } = splitByExceptionsId(req.body.exceptions.changes);
		const updatedExceptions = await Promise.all(
			withExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.updateScheduleSlotException(
					el.schedule_slot_exception_id,
					el
				);
				return {
					data,
				};
			})
		);
		const createdExceptions = await Promise.all(
			withoutExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.createScheduleSlotException(el);
				return {
					data,
				};
			})
		);
		const removedExceptions = await Promise.all(
			req.body.exceptions.removed.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.deleteScheduleSlotException(el.schedule_slot_exception_id);
				return {
					data,
				};
			})
		);
		const record = { updatedExceptions, createdExceptions, removedExceptions };
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating exceptions', error: message });
	}
}

/**
 * POST /reservation/schedule-slot-exceptions/update-exceptions-booking-slots
 * @tag Reservation
 * @summary Create a new schedule slot exception or update an existing one and also booking slots
 * @description Creates a new schedule slot exception or updates an existing one based on the provided data and also handles booking slots.
 * @operationId updateOrCreateScheduleSlotExceptionsAndBookingSlots
 * @requestBody {CreateOrUpdateExceptionsAndBookingsInput} requestBody - The data to create or update.
 * @response 201 - Schedule slot exceptions created or updated successfully and booking slots created or updated
 * @responseContent {ScheduleSlotException} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating or creating schedule slot exceptions and booking slots
 */
export async function updateOrCreateScheduleSlotExceptionsAndBookingSlots(
	req: ValidatedRequest<CreateOrUpdateExceptionsAndBookingsInput>,
	res: Response
): Promise<void> {
	try {
		const { withExceptionId, withoutExceptionId } = splitByExceptionsId(req.body.exceptions.changes);
		const { withBookingId, withoutBookingId } = splitByBookingId(req.body.bookingSlots.newOrChanged);
		const updatedExceptions = await Promise.all(
			withExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.updateScheduleSlotException(
					el.schedule_slot_exception_id,
					el
				);
				return {
					data,
				};
			})
		);
		const createdExceptions = await Promise.all(
			withoutExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.createScheduleSlotException(el);
				return {
					data,
				};
			})
		);
		const removedExceptions = await Promise.all(
			req.body.exceptions.removed.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.deleteScheduleSlotException(el.schedule_slot_exception_id);
				return {
					data,
				};
			})
		);
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

		const record = {
			updatedExceptions,
			createdExceptions,
			removedExceptions,
			updatedSlots,
			createdSlots,
			removedSlots,
		};
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating exceptions', error: message });
	}
}

/**
 * Creates a new schedule slot with booking slots and exceptions.
 * @param {CreateScheduleSlotWithExceptionsAndBookingSlotsInput} data - The data for the new schedule slot, booking slots, and exceptions.
 * @description This function creates a new schedule slot and associates it with booking slots and exceptions.
 * @returns {Object} An object containing the created schedule slot, booking slots, and exceptions.
 * @throws {Error} If the input is not an array or if any slot does not match the expected structure.
 */
export async function createScheduleSlotWithData(data: CreateScheduleSlotWithExceptionsAndBookingSlotsInput) {
	try {
		const { schedule, bookingSlots, exceptions } = data;
		const createdScheduleSlot = await ScheduleSlotDao.createScheduleSlot(schedule);
		const schedule_slot_id = createdScheduleSlot.schedule_slot_id;
		const withoutId = bookingSlots;
		const bookingSlotsToCreate = withoutId.map((el) => ({
			...el,
			schedule_slot_id,
		}));
		const exceptionsWithoutId = exceptions;
		const exceptionsToCreate = exceptionsWithoutId.map((el) => ({
			...el,
			schedule_slot_id,
		}));
		const createdExceptions = await Promise.all(
			exceptionsToCreate.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.createScheduleSlotException(el);
				return {
					data,
				};
			})
		);
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
				schedule_exceptions: createdExceptions,
			},
		};

		return record;
	} catch (error) {
		throw new Error(
			'Error Creating Schedule Slot With Booking Slots and Exceptions: ' +
				(error instanceof Error ? error.message : 'Unknown error')
		);
	}
}

/**
 * POST /reservation/schedule-slot-exceptions/create-schedule-slot-with-booking-slots-and-exceptions
 * @tag Reservation
 * @summary Create a new schedule slot with booking slots and exceptions
 * @description Creates a new schedule slot and associated booking slots and exceptions.
 * @operationId createScheduleSlotWithBookingSlotsAndExceptions
 * @requestBody {CreateScheduleSlotWithExceptionsAndBookingSlotsInput} requestBody - The schedule slot, booking slots, and exceptions data to create.
 * @response 201 - Schedule slot with booking slots and exceptions created successfully
 * @responseContent {ScheduleSlot} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule slot with booking slots and exceptions
 */
export async function createScheduleSlotWithBookingSlotsAndExceptions(
	req: ValidatedRequest<CreateScheduleSlotWithExceptionsAndBookingSlotsInput>,
	res: Response
): Promise<void> {
	try {
		const record = await createScheduleSlotWithData(req.body);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating or creating booking slot', error: message });
	}
}

/**
 * Updates a schedule slot with booking slots and exceptions.
 * @param {string} id - The ID of the schedule slot to update.
 * @param {UpdateScheduleSlotWithBookingSlotsAndExceptionsInput} data - The data for the update, including schedule, booking slots, and exceptions.
 * @description This function updates an existing schedule slot and associates it with booking slots and exceptions.
 * @returns {Object} An object containing the updated schedule slot, booking slots, and exceptions.
 * @throws {Error} If the input is not an array or if any slot does not match the expected structure.
 */
export async function updateScheduleSlotWithData(
	data: UpdateScheduleSlotWithBookingSlotsAndExceptionsInput,
	id: string
) {
	try {
		const { schedule, bookingSlots, exceptions } = data;
		const record = Object.keys(schedule).length !== 0 ? await ScheduleSlotDao.updateScheduleSlot(id, schedule) : {};

		const { withExceptionId, withoutExceptionId } = splitByExceptionsId(exceptions.changes);
		const { withBookingId, withoutBookingId } = splitByBookingId(bookingSlots.newOrChanged);
		const updatedExceptions = await Promise.all(
			withExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.updateScheduleSlotException(
					el.schedule_slot_exception_id,
					el
				);
				return {
					data,
				};
			})
		);
		const createdExceptions = await Promise.all(
			withoutExceptionId.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.createScheduleSlotException(el);
				return {
					data,
				};
			})
		);
		const removedExceptions = await Promise.all(
			exceptions.removed.map(async (el) => {
				let data = await ScheduleSlotExceptionDao.deleteScheduleSlotException(el.schedule_slot_exception_id);
				return {
					data,
				};
			})
		);
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
			bookingSlots.removed.map(async (el) => {
				let data = await BookingSlotDao.deleteBookingSlot(el.booking_slot_id);
				return {
					data,
				};
			})
		);

		const resultData = {
			schedule_slot: record,
			booking_slots: [...updatedSlots, ...createdSlots, ...removedSlots],
			exceptions: [...updatedExceptions, ...createdExceptions, ...removedExceptions],
		};
		return resultData;
	} catch (error) {
		throw new Error(
			'Error Creating Schedule Slot With Booking Slots and Exceptions: ' +
				(error instanceof Error ? error.message : 'Unknown error')
		);
	}
}

/**
 * PUT /reservation/schedule-slot-exceptions/update-schedule-slot-with-booking-slots-and-exceptions:id
 * @tag Reservation
 * @summary Update a new schedule slot with booking slots and exceptions
 * @description Updates schedule slot with associated booking slots and exceptions.
 * @operationId updateScheduleSlotWithBookingSlotsAndExceptions
 * @requestBody {UpdateScheduleSlotWithBookingSlotsAndExceptionsInput} requestBody - The schedule slot with booking slots and exceptions data to update.
 * @response 201 - Schedule slot with booking slots and exceptions updated successfully
 * @responseContent {ScheduleSlot} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating schedule slot with booking slots and exceptions
 */
export async function updateScheduleSlotWithBookingSlotsAndExceptions(
	req: ValidatedRequest<UpdateScheduleSlotWithBookingSlotsAndExceptionsInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await updateScheduleSlotWithData(req.body, req.params.id);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({
			message: 'Error updating on updating schedule slot with booking slots and exceptions',
			error,
		});
	}
}

export default {
	getScheduleSlotExceptionsBySlotId,
	createScheduleSlotException,
	updateScheduleSlotException,
	deleteScheduleSlotException,
	getScheduleSlotExceptionById,
	updateOrCreateScheduleSlotExceptions,
	updateOrCreateScheduleSlotExceptionsAndBookingSlots,
	createScheduleSlotWithBookingSlotsAndExceptions,
	updateScheduleSlotWithBookingSlotsAndExceptions,
	createScheduleSlotWithData,
	updateScheduleSlotWithData,
};
