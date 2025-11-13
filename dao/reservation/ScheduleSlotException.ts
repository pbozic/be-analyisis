import prisma from '../../prisma/prisma';
import type {
	CreateScheduleSlotExceptionRequest,
	UpdateScheduleSlotExceptionRequest,
	ScheduleSlotExceptionResponse,
} from '../../schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.dto.js';
import {
	toScheduleSlotExceptionResponse,
	toScheduleSlotExceptionList,
} from '../../schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.mappers.js';

/**
 * Retrieves all exceptions for a given schedule slot ID.
 * @param {string} scheduleSlotId - The schedule slot ID.
 * @returns {Promise<ScheduleSlotExceptionResponse[]>} A promise that resolves to an array of exception records.
 * @throws {Error} If there is an error retrieving the exceptions.
 */
export async function getExceptionsByScheduleSlotId(scheduleSlotId: string): Promise<ScheduleSlotExceptionResponse[]> {
	try {
		const records = await prisma.schedule_slot_exceptions.findMany({
			where: { schedule_slot_id: scheduleSlotId },
		});
		return toScheduleSlotExceptionList(records);
	} catch (error) {
		throw new Error('Error retrieving schedule slot exceptions');
	}
}

/**
 * Creates a new schedule slot exception.
 * @param {CreateScheduleSlotExceptionRequest} data - The data for the new exception.
 * @returns {Promise<ScheduleSlotExceptionResponse>} A promise that resolves to the created exception record.
 * @throws {Error} If there is an error creating the exception.
 */
export async function createScheduleSlotException(
	data: CreateScheduleSlotExceptionRequest
): Promise<ScheduleSlotExceptionResponse> {
	try {
		const record = await prisma.schedule_slot_exceptions.create({
			data: {
				schedule_slot_id: data.schedule_slot_id,
				date: data.date,
				start_time: data.start_time,
				end_time: data.end_time,
				reason: data.reason,
				type: data.type,
			},
		});
		return toScheduleSlotExceptionResponse(record);
	} catch (error) {
		throw new Error('Error creating schedule slot exception');
	}
}

/**
 * Updates an existing schedule slot exception.
 * @param {string} id - The ID of the exception to update.
 * @param {UpdateScheduleSlotExceptionRequest} data - The data to update the exception with.
 * @returns {Promise<ScheduleSlotExceptionResponse>} A promise that resolves to the updated exception.
 * @throws {Error} If there is an error updating the exception.
 */
export async function updateScheduleSlotException(
	id: string,
	data: UpdateScheduleSlotExceptionRequest
): Promise<ScheduleSlotExceptionResponse> {
	try {
		const record = await prisma.schedule_slot_exceptions.update({
			where: { schedule_slot_exception_id: id },
			data: {
				schedule_slot_id: data.schedule_slot_id,
				date: data.date,
				start_time: data.start_time,
				end_time: data.end_time,
				reason: data.reason,
				type: data.type,
			},
		});
		return toScheduleSlotExceptionResponse(record);
	} catch (error) {
		throw new Error('Error updating schedule slot exception');
	}
}

/**
 * Deletes a schedule slot exception.
 * @param {string} id - The ID of the exception to delete.
 * @returns {Promise<void>} A promise that resolves when the exception is deleted.
 * @throws {Error} If there is an error deleting the exception.
 */
export async function deleteScheduleSlotException(id: string): Promise<void> {
	try {
		await prisma.schedule_slot_exceptions.delete({
			where: { schedule_slot_exception_id: id },
		});
	} catch (error) {
		throw new Error('Error deleting schedule slot exception');
	}
}

/**
 * Retrieves a schedule slot exception by ID.
 * @param {string} id - The ID of the exception.
 * @returns {Promise<ScheduleSlotExceptionResponse | null>} A promise that resolves to the exception record or null.
 * @throws {Error} If there is an error retrieving the exception.
 */
export async function getScheduleSlotExceptionById(id: string): Promise<ScheduleSlotExceptionResponse | null> {
	try {
		const record = await prisma.schedule_slot_exceptions.findUnique({
			where: { schedule_slot_exception_id: id },
		});
		return record ? toScheduleSlotExceptionResponse(record) : null;
	} catch (error) {
		throw new Error('Error retrieving schedule slot exception');
	}
}

export default {
	getExceptionsByScheduleSlotId,
	createScheduleSlotException,
	updateScheduleSlotException,
	deleteScheduleSlotException,
	getScheduleSlotExceptionById,
};
