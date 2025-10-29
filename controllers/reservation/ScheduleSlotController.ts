import { Response } from 'express';

import ScheduleSlotDao from '../../dao/reservation/ScheduleSlot';
import { ValidatedRequest } from '../../types/validatedRequest';
import {
	CreateScheduleSlotInput,
	UpdateScheduleSlotInput,
	CreateMultipleSchedulesInput,
	OverwriteMultipleSchedulesInput,
	UpdateMultipleSchedulesInput,
	ScheduleSlotException,
	BookingSlot,
} from '../../types/reservation/Schedule';
import { createScheduleSlotWithData, updateScheduleSlotWithData } from './ScheduleSlotExceptionController.ts';

/**
 * GET /reservation/schedule-slots/list/:schedule_id
 * @tag Reservation
 * @summary Get all schedule slots by schedule ID
 * @description Retrieves all schedule slots for a given schedule ID.
 * @operationId getScheduleSlotsBySchedule
 * @pathParam {string} schedule_id - The ID of the schedule.
 * @response 200 - Schedule slots retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving schedule slots
 * @prisma_model schedule_slot
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
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule slots', error: message });
	}
}

/**
 * POST /reservation/schedule-slots
 * @tag Reservation
 * @summary Create a new schedule slot
 * @description Creates a new schedule slot.
 * @operationId createScheduleSlot
 * @bodyContent {object} application/json
 * @response 201 - Schedule slot created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule slot
 * @prisma_model schedule_slot
 */
export async function createScheduleSlot(req: ValidatedRequest<CreateScheduleSlotInput>, res: Response): Promise<void> {
	try {
		const record = await ScheduleSlotDao.createScheduleSlot(req.body);
		res.status(201).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule slot', error: message });
	}
}

/**
 * PUT /reservation/schedule-slots/:id
 * @tag Reservation
 * @summary Update a schedule slot
 * @description Updates an existing schedule slot.
 * @operationId updateScheduleSlot
 * @pathParam {string} id - The ID of the schedule slot to update.
 * @bodyContent {object} application/json
 * @response 200 - Schedule slot updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Schedule slot not found
 * @response 500 - Error updating schedule slot
 * @prisma_model schedule_slot
 */
export async function updateScheduleSlot(
	req: ValidatedRequest<UpdateScheduleSlotInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleSlotDao.updateScheduleSlot(req.params.id, req.body);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating schedule slot', error: message });
	}
}

/**
 * DELETE /reservation/schedule-slots/:id
 * @tag Reservation
 * @summary Delete a schedule slot
 * @description Deletes a schedule slot by its ID.
 * @operationId deleteScheduleSlot
 * @pathParam {string} id - The ID of the schedule slot to delete.
 * @response 204 - Schedule slot deleted successfully
 * @response 404 - Schedule slot not found
 * @response 500 - Error deleting schedule slot
 * @prisma_model schedule_slot
 */
export async function deleteScheduleSlot(req: ValidatedRequest<null, { id: string }>, res: Response): Promise<void> {
	try {
		await ScheduleSlotDao.deleteScheduleSlot(req.params.id);
		res.status(204).send();
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deleting schedule slot', error: message });
	}
}

/**
 * GET /reservation/schedule-slots/:id
 * @tag Reservation
 * @summary Get a schedule slot by ID
 * @description Retrieves a schedule slot by its ID.
 * @operationId getScheduleSlotById
 * @pathParam {string} id - The ID of the schedule slot to retrieve.
 * @response 200 - Schedule slot retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Schedule slot not found
 * @response 500 - Error retrieving schedule slot
 * @prisma_model schedule_slot
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
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule slot', error: message });
	}
}

function removeMatchingIsoDates(firstArray: string[], secondArray: string[]): string[] {
	const firstSet = new Set(firstArray);
	return secondArray.filter((date) => !firstSet.has(date));
}

/**
 * POST /reservation/schedule-slots/create-multiple-schedules
 * @tag Reservation
 * @summary Create a new location schedules
 * @description Creates a new location schedules.
 * @operationId createLocationSchedule
 * @bodyContent {object} application/json
 * @response 201 - Schedule created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule
 * @prisma_model schedule_slot
 * @prisma_model schedule_slot_exceptions
 * @prisma_model booking_slots
 */
export async function createMultipleSchedules(
	req: ValidatedRequest<CreateMultipleSchedulesInput>,
	res: Response
): Promise<void> {
	try {
		const { schedule, bookingSlots, exceptions, dates } = req.body;
		const existingSchedules = await ScheduleSlotDao.getScheduleSlotsByEmployeeIdAndDates(
			schedule.employee_id,
			dates
		);
		const existingDates = existingSchedules.map((el) => el.date.toISOString());
		const datesToCreate = removeMatchingIsoDates(existingDates, dates);

		const schedules = await Promise.all(
			datesToCreate.map(async (el) => {
				const updateSchedule = {
					...schedule,
					date: el,
					start_time: updateUtcDateRetainTime(schedule.start_time, el),
					end_time: updateUtcDateRetainTime(schedule.end_time, el),
				};
				const updatedExceptions = exceptions.map((exception) => ({
					...exception,
					date: el,
					start_time: updateUtcDateRetainTime(exception.start_time, el),
					end_time: updateUtcDateRetainTime(exception.end_time, el),
				}));
				const updatedBookingSlots = bookingSlots.map((slot) => ({
					...slot,
					date: el,
					start_time: updateUtcDateRetainTime(slot.start_time, el),
					end_time: updateUtcDateRetainTime(slot.end_time, el),
				}));

				let data = await createScheduleSlotWithData({
					schedule: updateSchedule,
					bookingSlots: updatedBookingSlots,
					exceptions: updatedExceptions,
				});
				return { data };
			})
		);
		//let location = await ScheduleDao.createSchedule(scheduleData);
		res.status(201).json({ schedules, existingSchedules });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule', error: message });
	}
}

/**
 * POST /reservation/schedule-slots/overwrite-multiple-schedules
 * @tag Reservation
 * @summary Overwrite multiple schedules with new data
 * @description Overwrites multiple schedules with new data based on the provided dates.
 * @operationId overwriteMultipleSchedules
 * @bodyContent {object} application/json
 * @response 201 - Schedule created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error overwriting schedules
 * @prisma_model schedule_slot
 * @prisma_model schedule_slot_exceptions
 * @prisma_model booking_slots
 */
export async function overwriteMultipleSchedules(
	req: ValidatedRequest<OverwriteMultipleSchedulesInput>,
	res: Response
): Promise<void> {
	try {
		const { schedule, bookingSlots, exceptions, dates, ids } = req.body;
		const removedSlots = await Promise.all(
			ids.map(async (el) => {
				let data = await ScheduleSlotDao.deleteScheduleSlot(el);
				return {
					data,
				};
			})
		);

		if (removedSlots) {
			const schedules = await Promise.all(
				dates.map(async (el) => {
					const updateSchedule = {
						...schedule,
						date: el,
						start_time: updateUtcDateRetainTime(schedule.start_time, el),
						end_time: updateUtcDateRetainTime(schedule.end_time, el),
					};
					const updatedExceptions = exceptions.map((exception) => ({
						...exception,
						date: el,
						start_time: updateUtcDateRetainTime(exception.start_time, el),
						end_time: updateUtcDateRetainTime(exception.end_time, el),
					}));
					const updatedBookingSlots = bookingSlots.map((slot) => ({
						...slot,
						date: el,
						start_time: updateUtcDateRetainTime(slot.start_time, el),
						end_time: updateUtcDateRetainTime(slot.end_time, el),
					}));

					let data = await createScheduleSlotWithData({
						schedule: updateSchedule,
						bookingSlots: updatedBookingSlots,
						exceptions: updatedExceptions,
					});
					return { data };
				})
			);
			res.status(201).json({ schedules });
		} else {
			res.status(500).json({ message: 'No slots to remove' });
		}

		//let location = await ScheduleDao.createSchedule(scheduleData);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error overwriting schedule', error: message });
	}
}

/**
 * Updates the date while retaining the time.
 * @param {string} startTimeUtc - The original start time in UTC.
 * @param {string} newDateUtc - The new date in UTC to set.
 * @description This function updates the date part of a UTC date string while keeping the time part intact.
 * @returns {string} The updated date string in ISO format with the original time retained.
 * @throws {Error} If the input date strings are invalid.
 */
function updateUtcDateRetainTime(startTimeUtc: string, newDateUtc: string): string {
	const original = new Date(startTimeUtc); // has both date + time in UTC
	const newDate = new Date(newDateUtc); // only date matters here

	// Replace date part while keeping original time (in UTC)
	newDate.setUTCHours(
		original.getUTCHours(),
		original.getUTCMinutes(),
		original.getUTCSeconds(),
		original.getUTCMilliseconds()
	);

	return newDate.toISOString();
}

/**
 * PUT /reservation/schedule-slots/update-multiple-schedules/:id
 * @tag Reservation
 * @summary Update schedule with new data and creates new schedules
 * @description Updates existing schedules with new data and creates new schedules based on the provided dates.
 * @operationId updateMultipleSchedules
 * @pathParam {string} id - The ID of the schedule slot to update.
 * @bodyContent {object} application/json
 * @response 201 - Schedule updated successfully and new schedules created
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error updating schedules and creating new schedules
 * @prisma_model schedule_slot
 * @prisma_model schedule_slot_exceptions
 * @prisma_model booking_slots
 */
export async function updateMultipleSchedules(
	req: ValidatedRequest<UpdateMultipleSchedulesInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { schedule, bookingSlots, exceptions, dates, update } = req.body;
		const existingSchedules = await ScheduleSlotDao.getScheduleSlotsByEmployeeIdAndDates(
			schedule.employee_id,
			dates
		);
		const existingDates = existingSchedules.map((el) => el.date.toISOString());
		const datesToCreate = removeMatchingIsoDates([...existingDates, schedule.date], dates);

		const scheduleData = update
			? { schedule, bookingSlots, exceptions }
			: { schedule: {}, bookingSlots, exceptions };
		const record = await updateScheduleSlotWithData(scheduleData, req.params.id);
		if (record) {
			const updatedSchedule = await ScheduleSlotDao.getScheduleSlotById(req.params.id);
			if (updatedSchedule) {
				const updatedScheduleData = updatedSchedule.schedule ?? schedule;
				const updatedScheduleDataExceptions: ScheduleSlotException[] =
					updatedSchedule?.schedule_slot_exceptions ?? [];
				const updatedScheduleDataBookingSlots: BookingSlot[] = updatedSchedule?.booking_slots ?? [];
				const schedules = await Promise.all(
					datesToCreate.map(async (el) => {
						const updateSchedule = {
							...updatedScheduleData,
							date: el,
							start_time: updateUtcDateRetainTime(schedule.start_time, el),
							end_time: updateUtcDateRetainTime(schedule.end_time, el),
							schedule_employee_id:
								'schedule_employee_id' in updatedScheduleData
									? updatedScheduleData.schedule_employee_id
									: schedule.schedule_employee_id,
							employee_id:
								'employee_id' in updatedScheduleData
									? updatedScheduleData.employee_id
									: schedule.employee_id,
						};
						const updatedExceptions = updatedScheduleDataExceptions.map((exception) => ({
							...exception,
							date: el,
							start_time: updateUtcDateRetainTime(exception.start_time.toISOString(), el),
							end_time: updateUtcDateRetainTime(exception.end_time.toISOString(), el),
							reason: exception.reason === null ? undefined : exception.reason,
						}));
						const updatedBookingSlots = updatedScheduleDataBookingSlots.map((slot) => ({
							...slot,
							date: el,
							start_time: updateUtcDateRetainTime(slot.start_time.toISOString(), el),
							end_time: updateUtcDateRetainTime(slot.end_time.toISOString(), el),
						}));

						let data = await createScheduleSlotWithData({
							schedule: updateSchedule,
							bookingSlots: updatedBookingSlots,
							exceptions: updatedExceptions,
						});
						return { data };
					})
				);
				//let location = await ScheduleDao.createSchedule(scheduleData);
				res.status(201).json({
					schedules,
					existingSchedules,
					updatedScheduleDataExceptions,
					updatedScheduleDataBookingSlots,
				});
			} else {
				res.status(404).json({ message: 'Schedule not found' });
			}
		} else {
			res.status(404).json({ message: 'Error updating schedule slot' });
		}
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule', error: message });
	}
}

export default {
	getScheduleSlotsByScheduleId,
	createScheduleSlot,
	updateScheduleSlot,
	deleteScheduleSlot,
	getScheduleSlotById,
	createMultipleSchedules,
	overwriteMultipleSchedules,
	updateMultipleSchedules,
};
