import prisma from '../../prisma/prisma';
import type {
	CreateScheduleRequest,
	ScheduleDAOResponse,
	UpdateScheduleRequest,
} from '../../schemas/dto/reservations/schedule/schedule.dto.js';

/**
 * Retrieves all schedules for a given business ID.
 * @param {string} locationId - The ID of the location to retrieve schedules for.
 * @returns {Promise<ScheduleDAOResponse[]>} A promise that resolves to an array of schedules.
 * @throws {Error} If there is an error retrieving the schedules.
 */
export async function getSchedulesByLocationId(): Promise<ScheduleDAOResponse[]> {
	try {
		let schedules = await prisma.schedule.findMany({
			// where: {
			// 	location_id: locationId,
			// },
			include: {
				location: true,
			},
		});
		return schedules;
	} catch (error) {
		throw new Error('Error retrieving schedules');
	}
}

/**
 * Creates a new schedule.
 * @param {CreateScheduleRequest} scheduleData - The data for the new schedule.
 * @returns {Promise<ScheduleDAOResponse>} A promise that resolves to the created schedule.
 * @throws {Error} If there is an error creating the schedule.
 */
export async function createSchedule(scheduleData: CreateScheduleRequest): Promise<ScheduleDAOResponse> {
	try {
		let schedule = await prisma.schedule.create({
			data: {
				name: scheduleData.name,
				color: scheduleData.color,
				location_id: scheduleData.location_id,
				start_date: scheduleData.start_date,
				end_date: scheduleData.end_date,
			},
		});
		return schedule;
	} catch (error) {
		throw new Error('Error creating schedule');
	}
}

/**
 * Updates an existing schedule.
 * @param {string} scheduleId - The ID of the schedule to update.
 * @param {UpdateScheduleRequest} scheduleData - The data to update the schedule with.
 * @returns {Promise<ScheduleDAOResponse>} A promise that resolves to the updated schedule.
 * @throws {Error} If there is an error updating the schedule.
 */
export async function updateSchedule(
	scheduleId: string,
	scheduleData: UpdateScheduleRequest
): Promise<ScheduleDAOResponse> {
	try {
		let schedule = await prisma.schedule.update({
			where: { schedule_id: scheduleId },
			data: {
				name: scheduleData.name,
				color: scheduleData.color,
				location_id: scheduleData.location_id,
				start_date: scheduleData.start_date,
				end_date: scheduleData.end_date,
			},
		});
		return schedule;
	} catch (error) {
		throw new Error('Error updating schedule');
	}
}

/**
 * Deletes a schedule by its ID.
 * @param {string} scheduleId - The ID of the schedule to delete.
 * @returns {Promise<void>} A promise that resolves when the schedule is deleted.
 * @throws {Error} If there is an error deleting the schedule.
 */
export async function deleteSchedule(scheduleId: string): Promise<void> {
	try {
		await prisma.schedule.delete({
			where: { schedule_id: scheduleId },
		});
	} catch (error) {
		throw new Error('Error deleting schedule');
	}
}

/**
 * Retrieves a schedule by its ID.
 * @param {string} scheduleId - The ID of the schedule to retrieve.
 * @returns {Promise<ScheduleDAOResponse | null>} A promise that resolves to the retrieved schedule.
 * @throws {Error} If there is an error retrieving the schedule.
 */
export async function getScheduleById(scheduleId: string): Promise<ScheduleDAOResponse | null> {
	try {
		let schedule = await prisma.schedule.findUnique({
			where: { schedule_id: scheduleId },
			include: {
				location: true,
				schedule_employees: true,
			},
		});
		return schedule;
	} catch (error) {
		throw new Error('Error retrieving schedule');
	}
}

export default {
	getSchedulesByLocationId,
	createSchedule,
	updateSchedule,
	deleteSchedule,
	getScheduleById,
};
