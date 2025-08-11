import { Response } from 'express';

import ScheduleSlotDao from '../../dao/reservation/ScheduleSlot';
import { ValidatedRequest } from '../../types/validatedRequest';
import { CreateScheduleSlotInput, UpdateScheduleSlotInput } from '../../types/reservation/Schedule';

/**
 * GET /reservation/schedule-slots/list/{schedule_id}
 * @tag Reservation
 * @summary Get all schedule slots by schedule ID
 * @description Retrieves all schedule slots for a given schedule ID.
 * @operationId getScheduleSlotsBySchedule
 * @pathParam {string} schedule_id - The ID of the schedule.
 * @response 200 - Schedule slots retrieved successfully
 * @responseContent {ScheduleSlot[]} 200.application/json
 * @response 500 - Error retrieving schedule slots
 */
export async function getScheduleSlotsByScheduleId(
	req: ValidatedRequest<null, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		const scheduleId = req.params.schedule_id;
		const records = await ScheduleSlotDao.getScheduleSlotsByScheduleId(scheduleId);
		res.status(200).json(records);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving schedule slots', error });
	}
}

/**
 * POST /reservation/schedule-slots
 * @tag Reservation
 * @summary Create a new schedule slot
 * @description Creates a new schedule slot.
 * @operationId createScheduleSlot
 * @requestBody {CreateScheduleSlotInput} requestBody - The schedule slot data to create.
 * @response 201 - Schedule slot created successfully
 * @responseContent {ScheduleSlot} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule slot
 */
export async function createScheduleSlot(req: ValidatedRequest<CreateScheduleSlotInput>, res: Response): Promise<void> {
	try {
		const record = await ScheduleSlotDao.createScheduleSlot(req.body);
		res.status(201).json(record);
	} catch (error) {
		res.status(500).json({ message: 'Error creating schedule slot', error });
	}
}

/**
 * PUT /reservation/schedule-slots/{id}
 * @tag Reservation
 * @summary Update a schedule slot
 * @description Updates an existing schedule slot.
 * @operationId updateScheduleSlot
 * @pathParam {string} id - The ID of the schedule slot to update.
 * @requestBody {UpdateScheduleSlotSInput} requestBody - The data to update the slot with.
 * @response 200 - Schedule slot updated successfully
 * @responseContent {ScheduleSlot} 200.application/json
 * @response 404 - Schedule slot not found
 * @response 500 - Error updating schedule slot
 */
export async function updateScheduleSlot(
	req: ValidatedRequest<UpdateScheduleSlotInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotDao.updateScheduleSlot(req.params.id, req.body);
		res.status(200).json(record);
	} catch (error) {
		res.status(500).json({ message: 'Error updating schedule slot', error });
	}
}

/**
 * DELETE /reservation/schedule-slots/{id}
 * @tag Reservation
 * @summary Delete a schedule slot
 * @description Deletes a schedule slot by its ID.
 * @operationId deleteScheduleSlot
 * @pathParam {string} id - The ID of the schedule slot to delete.
 * @response 204 - Schedule slot deleted successfully
 * @response 404 - Schedule slot not found
 * @response 500 - Error deleting schedule slot
 */
export async function deleteScheduleSlot(req: ValidatedRequest<null, { id: string }>, res: Response): Promise<void> {
	try {
		await ScheduleSlotDao.deleteScheduleSlot(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting schedule slot', error });
	}
}

/**
 * GET /reservation/schedule-slots/{id}
 * @tag Reservation
 * @summary Get a schedule slot by ID
 * @description Retrieves a schedule slot by its ID.
 * @operationId getScheduleSlotById
 * @pathParam {string} id - The ID of the schedule slot to retrieve.
 * @response 200 - Schedule slot retrieved successfully
 * @responseContent {ScheduleSlot} 200.application/json
 * @response 404 - Schedule slot not found
 * @response 500 - Error retrieving schedule slot
 */
export async function getScheduleSlotById(req: ValidatedRequest<null, { id: string }>, res: Response): Promise<void> {
	try {
		const record = await ScheduleSlotDao.getScheduleSlotById(req.params.id);
		if (!record) {
			res.status(404).json({ message: 'Schedule slot not found' });
			return;
		}
		res.status(200).json(record);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving schedule slot', error });
	}
}

export default {
	getScheduleSlotsByScheduleId,
	createScheduleSlot,
	updateScheduleSlot,
	deleteScheduleSlot,
	getScheduleSlotById,
};
