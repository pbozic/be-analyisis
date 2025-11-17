import { log } from 'node:console';

import { Request, Response } from 'express';

import ScheduleDao from '../../dao/reservation/Schedule.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import type {
	CreateScheduleRequest,
	UpdateScheduleRequest,
	UpdateScheduleWithEmployees,
	CreateScheduleWithEmployees,
} from '../../schemas/dto/reservations/schedule/schedule.dto';
import ScheduleEmployeeDao from '../../dao/reservation/ScheduleEmployee.ts';

// Import DTO types for API documentation
//import type { ScheduleDAOResponse } from '../../schemas/dto/reservations/schedule/schedule.dto.js';

/**
 * GET /reservation/schedules
 * @tag Reservation
 * @summary Get all location schedules
 * @description Retrieves all location schedules.
 * @operationId getLocationSchedules
 * @response 200 - Location schedules retrieved successfully
 * @responseContent {ScheduleDAOResponse[]} 200.application/json
 * @response 500 - Error retrieving schedules
 * @prisma_model schedule
 */
export async function getSchedule(req: Request, res: Response): Promise<void> {
	try {
		let schedules = await ScheduleDao.getSchedulesByLocationId();
		res.status(200).json(schedules);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedules', error: message });
	}
}

/**
 * POST /reservation/schedules
 * @tag Reservation
 * @summary Create a new location schedules
 * @description Creates a new location schedules.
 * @operationId createLocationSchedule
 * @bodyContent {CreateScheduleRequest} application/json
 * @response 201 - Schedule created successfully
 * @responseContent {ScheduleDAOResponse} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule
 * @prisma_model schedule
 */
export async function createSchedule(req: ValidatedRequest<CreateScheduleRequest>, res: Response): Promise<void> {
	try {
		let scheduleData = req.body;
		let location = await ScheduleDao.createSchedule(scheduleData);
		res.status(201).json(location);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule', error: message });
	}
}

/**
 * PUT /reservation/schedules/:schedule_id
 * @tag Reservation
 * @summary Update a reservation schedule
 * @description Updates an existing reservation schedule.
 * @operationId updateLocationSchedule
 * @pathParam {string} schedule_id - The ID of the schedule to update.
 * @bodyContent {UpdateScheduleRequest} application/json
 * @response 200 - Schedule updated successfully
 * @responseContent {ScheduleDAOResponse} 200.application/json
 * @response 404 - Schedule not found
 * @response 500 - Error updating schedule
 * @prisma_model schedule
 */
export async function updateSchedule(
	req: ValidatedRequest<UpdateScheduleRequest, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		let scheduleId = req.params.schedule_id;
		let scheduleData = req.body;
		let schedule = await ScheduleDao.updateSchedule(scheduleId, scheduleData);
		res.status(200).json(schedule);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating schedule', error: message });
	}
}

/**
 * DELETE /reservation/schedules/:schedule_id
 * @tag Reservation
 * @summary Delete a reservation schedule
 * @description Deletes a reservation schedule by its ID.
 * @operationId deleteLocationSchedule
 * @pathParam {string} schedule_id - The ID of the schedule to delete.
 * @response 204 - Schedule deleted successfully
 * @response 404 - Schedule not found
 * @response 500 - Error deleting schedule
 * @prisma_model schedule
 */
export async function deleteSchedule(
	req: ValidatedRequest<null, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		let scheduleId = req.params.schedule_id as string;
		await ScheduleDao.deleteSchedule(scheduleId);
		res.status(204).send();
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deleting schedule', error: message });
	}
}

/**
 * GET /reservation/schedules/:schedule_id
 * @tag Reservation
 * @summary Get a reservation schedule by ID
 * @description Retrieves a reservation schedule by its ID.
 * @operationId getLocationScheduleById
 * @pathParam {string} schedule_id - The ID of the schedule to retrieve.
 * @response 200 - Schedule retrieved successfully
 * @responseContent {ScheduleDAOResponse} 200.application/json
 * @response 404 - Schedule not found
 * @response 500 - Error retrieving schedule
 * @prisma_model schedule
 */

export async function getScheduleById(
	req: ValidatedRequest<null, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		let scheduleId = req.params.schedule_id as string;
		let schedule = await ScheduleDao.getScheduleById(scheduleId);
		if (!schedule) {
			res.status(404).json({ message: 'Schedule not found' });
			return;
		}
		res.status(200).json(schedule);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule', error: message });
	}
}

/**
 * PUT /reservation/schedules/schedule-with-employees/:schedule_id
 * @tag Reservation
 * @summary Update a reservation schedule with employees
 * @description Updates an existing reservation schedule with employees.
 * @operationId updateScheduleWithData
 * @pathParam {string} schedule_id - The ID of the schedule to update.
 * @bodyContent {UpdateScheduleWithEmployees} application/json
 * @response 200 - Schedule updated successfully
 * @responseContent {{schedule: ScheduleDAOResponse, removedEmployees: object[], createdEmployees: object[]}} 200.application/json
 * @response 404 - Schedule not found
 * @response 500 - Error updating schedule
 * @prisma_model schedule
 * @prisma_model schedule_employee
 */
export async function updateScheduleWithData(
	req: ValidatedRequest<UpdateScheduleWithEmployees, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		let scheduleId = req.params.schedule_id;
		const { formData, removed, added } = req.body;
		let schedule = Object.keys(formData).length !== 0 ? await ScheduleDao.updateSchedule(scheduleId, formData) : {};
		const removedEmployees = await Promise.all(
			removed.map(async (el) => {
				let data = await ScheduleEmployeeDao.deleteScheduleEmployee(el);
				return {
					data,
				};
			})
		);
		const createdEmployees = await Promise.all(
			added.map(async (el) => {
				const employeeData = {
					schedule_id: scheduleId,
					employee_id: el,
				};
				let data = await ScheduleEmployeeDao.createScheduleEmployee(employeeData);
				return {
					data,
				};
			})
		);
		res.status(200).json({ schedule, removedEmployees, createdEmployees });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating schedule', error: message });
	}
}

/**
 * POST /reservation/schedules/schedule-with-employees
 * @tag Reservation
 * @summary Create a new reservation schedule with employees
 * @description Creates a new reservation schedule with employees.
 * @operationId createScheduleWithData
 * @bodyContent {CreateScheduleWithEmployees} application/json
 * @response 200 - Schedule created successfully
 * @responseContent {{schedule: ScheduleDAOResponse, createdEmployees: object[]}} 200.application/json
 * @response 404 - Schedule not found
 * @response 500 - Error creating schedule
 * @prisma_model schedule
 * @prisma_model schedule_employee
 */
export async function createScheduleWithData(
	req: ValidatedRequest<CreateScheduleWithEmployees>,
	res: Response
): Promise<void> {
	try {
		const { formData, added } = req.body;
		let schedule = await ScheduleDao.createSchedule(formData);
		const scheduleId = schedule.schedule_id;
		const createdEmployees = await Promise.all(
			added.map(async (el) => {
				const employeeData = {
					schedule_id: scheduleId,
					employee_id: el,
				};
				let data = await ScheduleEmployeeDao.createScheduleEmployee(employeeData);
				return {
					data,
				};
			})
		);
		res.status(200).json({ schedule, createdEmployees });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		log('Error updating schedule with data:', error);
		res.status(500).json({ message: 'Error updating schedule', error: message });
	}
}

export default {
	getSchedule,
	createSchedule,
	updateSchedule,
	deleteSchedule,
	getScheduleById,
	updateScheduleWithData,
	createScheduleWithData,
};
