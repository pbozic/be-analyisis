import { Request, Response } from 'express';

import ScheduleEmployeeDao from '../../dao/reservation/ScheduleEmployee';
import { ValidatedRequest } from '../../types/validatedRequest';
import { CreateScheduleEmployeeInput, UpdateScheduleEmployeeInput } from '../../types/reservation/Schedule';

/**
 * GET /reservation/schedule-employees/list/{schedule_id}
 * @tag Reservation
 * @summary Get all schedule-employee assignments by schedule ID
 * @description Retrieves all schedule-employee assignments for a given schedule ID.
 * @operationId getScheduleEmployeesBySchedule
 * @pathParam {string} schedule_id - The ID of the schedule.
 * @response 200 - Schedule-employee assignments retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving schedule employees
 */
export async function getScheduleEmployeesByScheduleId(
	req: ValidatedRequest<null, { schedule_id: string }>,
	res: Response
): Promise<void> {
	try {
		const scheduleId = req.params.schedule_id;
		const records = await ScheduleEmployeeDao.getScheduleEmployeesByScheduleId(scheduleId);
		res.status(200).json(records);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule employees', error: message });
	}
}

/**
 * POST /reservation/schedule-employees
 * @tag Reservation
 * @summary Create a new schedule-employee assignment
 * @description Creates a new schedule-employee assignment.
 * @operationId createScheduleEmployee
 * @requestBody {CreateScheduleEmployeeInput} requestBody - The schedule-employee data to create.
 * @response 201 - Schedule-employee assignment created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating schedule employee
 */
export async function createScheduleEmployee(
	req: ValidatedRequest<CreateScheduleEmployeeInput>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleEmployeeDao.createScheduleEmployee(req.body);
		res.status(201).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating schedule employee', error: message });
	}
}

/**
 * PUT /reservation/schedule-employees/{id}
 * @tag Reservation
 * @summary Update a schedule-employee assignment
 * @description Updates an existing schedule-employee assignment.
 * @operationId updateScheduleEmployee
 * @pathParam {string} id - The ID of the assignment to update.
 * @requestBody {UpdateScheduleEmployeeInput} requestBody - The data to update the assignment with.
 * @response 200 - Schedule-employee updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Schedule-employee not found
 * @response 500 - Error updating schedule employee
 */
export async function updateScheduleEmployee(
	req: ValidatedRequest<UpdateScheduleEmployeeInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleEmployeeDao.updateScheduleEmployee(req.params.id, req.body);
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error updating schedule employee', error: message });
	}
}

/**
 * DELETE /reservation/schedule-employees/{id}
 * @tag Reservation
 * @summary Delete a schedule-employee assignment
 * @description Deletes a schedule-employee assignment by its ID.
 * @operationId deleteScheduleEmployee
 * @pathParam {string} id - The ID of the schedule-employee to delete.
 * @response 204 - Schedule-employee deleted successfully
 * @response 404 - Schedule-employee not found
 * @response 500 - Error deleting schedule employee
 */
export async function deleteScheduleEmployee(
	req: ValidatedRequest<null, { id: string }>,
	res: Response
): Promise<void> {
	try {
		await ScheduleEmployeeDao.deleteScheduleEmployee(req.params.id);
		res.status(204).send();
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deleting schedule employee', error: message });
	}
}

/**
 * GET /reservation/schedule-employees/{id}
 * @tag Reservation
 * @summary Get a schedule-employee assignment by ID
 * @description Retrieves a schedule-employee assignment by its ID.
 * @operationId getScheduleEmployeeById
 * @pathParam {string} id - The ID of the schedule-employee to retrieve.
 * @response 200 - Schedule-employee retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Schedule-employee not found
 * @response 500 - Error retrieving schedule employee
 */
export async function getScheduleEmployeeById(
	req: ValidatedRequest<null, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const record = await ScheduleEmployeeDao.getScheduleEmployeeById(req.params.id);
		if (!record) {
			res.status(404).json({ message: 'Schedule employee not found' });
			return;
		}
		res.status(200).json(record);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving schedule employee', error: message });
	}
}

/**
 * GET /reservation/employees/{employee_id}
 * @tag Reservation
 * @summary Get a reservation employee by ID
 * @description Retrieves a reservation employee by its ID.
 * @operationId getReservationEmployeeById
 * @pathParam {string} employee_id - The ID of the employee to retrieve.
 * @response 200 - Employee retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error retrieving employee
 */

export async function getEmployeesByScheduleIdWithSlots(req: Request, res: Response): Promise<void> {
	try {
		let scheduleId = req.params.schedule_id as string;
		let employee = await ScheduleEmployeeDao.getEmployeesByScheduleIdWithSlots(scheduleId);
		if (!employee) {
			res.status(404).json({ message: 'Employee not found' });
			return;
		}
		res.status(200).json(employee);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error retrieving employee', error: message });
	}
}

export default {
	getScheduleEmployeesByScheduleId,
	createScheduleEmployee,
	updateScheduleEmployee,
	deleteScheduleEmployee,
	getScheduleEmployeeById,
	getEmployeesByScheduleIdWithSlots,
};
