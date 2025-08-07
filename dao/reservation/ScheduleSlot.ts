import prisma from '../../prisma/prisma';
import type {
	CreateScheduleSlotInput,
	UpdateScheduleSlotInput,
	ScheduleSlot,
} from '../../types/reservation/Schedule.ts';

/**
 * Retrieves all schedule slots for a given schedule ID.
 * @param {string} scheduleId - The schedule ID.
 * @returns {Promise<ScheduleSlot[]>} A promise that resolves to an array of schedule slot records.
 * @throws {Error} If there is an error retrieving the schedule slots.
 */
export async function getScheduleSlotsByScheduleId(scheduleId: string): Promise<ScheduleSlot[]> {
	try {
		const records = await prisma.schedule_slot.findMany({
			where: { schedule_id: scheduleId },
		});
		return records;
	} catch (error) {
		throw new Error('Error retrieving schedule slots');
	}
}

/**
 * Creates a new schedule slot.
 * @param {CreateScheduleSlotInput} data - The data for the new schedule slot.
 * @returns {Promise<ScheduleSlot>} A promise that resolves to the created schedule slot record.
 * @throws {Error} If there is an error creating the schedule slot.
 */
export async function createScheduleSlot(data: CreateScheduleSlotInput): Promise<ScheduleSlot> {
	try {
		const record = await prisma.schedule_slot.create({
			data: {
				schedule_id: data.schedule_id,
				schedule_employee_id: data.schedule_employee_id,
				employee_id: data.employee_id,
				date: data.date,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return record;
	} catch (error) {
		throw new Error('Error creating schedule slot');
	}
}

/**
 * Updates an existing schedule slot.
 * @param {string} id - The ID of the record to update.
 * @param {UpdateScheduleSlotInput} data - The data to update the record with.
 * @returns {Promise<ScheduleSlot>} A promise that resolves to the updated schedule slot record.
 * @throws {Error} If there is an error updating the schedule slot.
 */
export async function updateScheduleSlot(id: string, data: UpdateScheduleSlotInput): Promise<ScheduleSlot> {
	try {
		const record = await prisma.schedule_slot.update({
			where: { schedule_slot_id: id },
			data: {
				schedule_id: data.schedule_id,
				schedule_employee_id: data.schedule_employee_id,
				employee_id: data.employee_id,
				date: data.date,
				start_time: data.start_time,
				end_time: data.end_time,
			},
		});
		return record;
	} catch (error) {
		throw new Error('Error updating schedule slot');
	}
}

/**
 * Deletes a schedule slot.
 * @param {string} id - The ID of the record to delete.
 * @returns {Promise<void>} A promise that resolves when the record is deleted.
 * @throws {Error} If there is an error deleting the schedule slot.
 */
export async function deleteScheduleSlot(id: string): Promise<void> {
	try {
		await prisma.schedule_slot.delete({
			where: { schedule_slot_id: id },
		});
	} catch (error) {
		throw new Error('Error deleting schedule slot');
	}
}

/**
 * Retrieves a schedule slot by ID.
 * @param {string} id - The ID of the schedule slot record.
 * @returns {Promise<ScheduleSlot | null>} A promise that resolves to the retrieved schedule slot record or null.
 * @throws {Error} If there is an error retrieving the schedule slot.
 */
export async function getScheduleSlotById(id: string): Promise<ScheduleSlot | null> {
	try {
		const record = await prisma.schedule_slot.findUnique({
			where: { schedule_slot_id: id },
		});
		return record;
	} catch (error) {
		throw new Error('Error retrieving schedule slot');
	}
}

export default {
	getScheduleSlotsByScheduleId,
	createScheduleSlot,
	updateScheduleSlot,
	deleteScheduleSlot,
	getScheduleSlotById,
};
