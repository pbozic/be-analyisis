import { Response } from 'express';

import ScheduleSlotExceptionDao from '../../dao/reservation/ScheduleSlotException';
import { ValidatedRequest } from '../../types/validatedRequest';
import { CreateScheduleSlotExceptionInput, UpdateScheduleSlotExceptionInput } from '../../types/reservation/Schedule';

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
		res.status(500).json({ message: 'Error retrieving schedule slot exceptions', error });
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
		res.status(500).json({ message: 'Error creating schedule slot exception', error });
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
		res.status(500).json({ message: 'Error updating schedule slot exception', error });
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
		res.status(500).json({ message: 'Error deleting schedule slot exception', error });
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
		res.status(500).json({ message: 'Error retrieving schedule slot exception', error });
	}
}

export default {
	getScheduleSlotExceptionsBySlotId,
	createScheduleSlotException,
	updateScheduleSlotException,
	deleteScheduleSlotException,
	getScheduleSlotExceptionById,
};
