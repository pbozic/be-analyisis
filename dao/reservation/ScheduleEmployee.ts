import prisma from '../../prisma/prisma.js';
import type {
	CreateScheduleEmployeeInput,
	UpdateScheduleEmployeeInput,
	ScheduleEmployee,
} from '../../types/reservation/Schedule.ts';

/**
 * Retrieves all schedule-employee assignments for a given schedule ID.
 * @param {string} scheduleId - The schedule ID.
 * @returns {Promise<ScheduleEmployee[]>} A promise that resolves to an array of schedule-employee records.
 * @throws {Error} If there is an error retrieving the schedule employees.
 */
export async function getScheduleEmployeesByScheduleId(scheduleId: string): Promise<ScheduleEmployee[]> {
	try {
		const records = await prisma.schedule_employee.findMany({
			where: { schedule_id: scheduleId },
		});
		return records;
	} catch (error) {
		throw new Error('Error retrieving schedule employees');
	}
}

/**
 * Creates a new schedule-employee assignment.
 * @param {CreateScheduleEmployeeInput} data - The data for the new assignment.
 * @returns {Promise<ScheduleEmployee>} A promise that resolves to the created schedule-employee record.
 * @throws {Error} If there is an error creating the schedule employee.
 */
export async function createScheduleEmployee(data: CreateScheduleEmployeeInput): Promise<ScheduleEmployee> {
	try {
		const record = await prisma.schedule_employee.create({
			data: {
				schedule_id: data.schedule_id,
				employee_id: data.employee_id,
			},
		});
		return record;
	} catch (error) {
		throw new Error('Error creating schedule employee');
	}
}

/**
 * Updates an existing schedule-employee assignment.
 * @param {string} id - The ID of the record to update.
 * @param {UpdatecheduleEmployeeInput} data - The data to update the record with.
 * @returns {Promise<ScheduleEmployee>} A promise that resolves to the updated schedule-employee record.
 * @throws {Error} If there is an error updating the schedule employee.
 */
export async function updateScheduleEmployee(id: string, data: UpdateScheduleEmployeeInput): Promise<ScheduleEmployee> {
	try {
		const record = await prisma.schedule_employee.update({
			where: { schedule_employee_id: id },
			data,
		});
		return record;
	} catch (error) {
		throw new Error('Error updating schedule employee');
	}
}

/**
 * Deletes a schedule-employee assignment.
 * @param {string} id - The ID of the record to delete.
 * @returns {Promise<void>} A promise that resolves when the record is deleted.
 * @throws {Error} If there is an error deleting the schedule employee.
 */
export async function deleteScheduleEmployee(id: string): Promise<void> {
	try {
		await prisma.schedule_employee.delete({
			where: { schedule_employee_id: id },
		});
	} catch (error) {
		throw new Error('Error deleting schedule employee');
	}
}

/**
 * Retrieves a schedule-employee assignment by ID.
 * @param {string} id - The ID of the schedule-employee record.
 * @returns {Promise<ScheduleEmployee | null>} A promise that resolves to the retrieved schedule-employee record or null.
 * @throws {Error} If there is an error retrieving the schedule employee.
 */
export async function getScheduleEmployeeById(id: string): Promise<ScheduleEmployee | null> {
	try {
		const record = await prisma.schedule_employee.findUnique({
			where: { schedule_employee_id: id },
		});
		return record;
	} catch (error) {
		throw new Error('Error retrieving schedule employee');
	}
}

export default {
	getScheduleEmployeesByScheduleId,
	createScheduleEmployee,
	updateScheduleEmployee,
	deleteScheduleEmployee,
	getScheduleEmployeeById,
};
