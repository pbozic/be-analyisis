import prisma from '../../prisma/prisma';
import type {
	CreateScheduleSlotExceptionInput,
	UpdateScheduleSlotExceptionInput,
	ScheduleSlotException,
} from '../../types/reservation/Schedule.ts';

/**
 * Retrieves all exceptions for a given schedule slot ID.
 * @param {string} scheduleSlotId - The schedule slot ID.
 * @returns {Promise<ScheduleSlotException[]>} A promise that resolves to an array of exception records.
 * @throws {Error} If there is an error retrieving the exceptions.
 */
export async function getExceptionsByScheduleSlotId(scheduleSlotId: string): Promise<ScheduleSlotException[]> {
	try {
		const records = await prisma.schedule_slot_exceptions.findMany({
			where: { schedule_slot_id: scheduleSlotId },
		});
		return records;
	} catch (error) {
		throw new Error('Error retrieving schedule slot exceptions');
	}
}

/**
 * Creates a new schedule slot exception.
 * @param {CreateScheduleSlotExceptionInput} data - The data for the new exception.
 * @returns {Promise<ScheduleSlotException>} A promise that resolves to the created exception record.
 * @throws {Error} If there is an error creating the exception.
 */
export async function createScheduleSlotException(
	data: CreateScheduleSlotExceptionInput
): Promise<ScheduleSlotException> {
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
		return record;
	} catch (error) {
		throw new Error('Error creating schedule slot exception');
	}
}

/**
 * Updates an existing schedule slot exception.
 * @param {string} id - The ID of the exception to update.
 * @param {UpdateScheduleSlotExceptionInput} data - The data to update the exception with.
 * @returns {Promise<ScheduleSlotException>} A promise that resolves to the updated exception.
 * @throws {Error} If there is an error updating the exception.
 */
export async function updateScheduleSlotException(
	id: string,
	data: UpdateScheduleSlotExceptionInput
): Promise<ScheduleSlotException> {
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
		return record;
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
 * @returns {Promise<ScheduleSlotException | null>} A promise that resolves to the exception record or null.
 * @throws {Error} If there is an error retrieving the exception.
 */
export async function getScheduleSlotExceptionById(id: string): Promise<ScheduleSlotException | null> {
	try {
		const record = await prisma.schedule_slot_exceptions.findUnique({
			where: { schedule_slot_exception_id: id },
		});
		return record;
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
