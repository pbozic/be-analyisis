import { Request, Response } from 'express';

import EmployeeDao from '../../dao/reservation/Employee.ts';
import BusinessUsersDao from '../../dao/BusinessUsers.js';
import { CreateEmployeeInput, UpdateEmployeeInput } from '../../types/reservation/Employee.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';

/**
 * GET /reservation/employees
 * @tag Reservation
 * @summary Get all reservation employees
 * @description Retrieves all reservation employees.
 * @operationId getReservationEmployees
 * @response 200 - Reservation employees retrieved successfully
 * @responseContent {Employee[]} 200.application/json
 * @response 500 - Error retrieving employees
 */
export async function getEmployees(req: Request, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.body.reservation_module_id as string;
		let employees = await EmployeeDao.getEmployeesByReservationModuleId(reservationModuleId);
		res.status(200).json(employees);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving employees', error });
	}
}

/**
 * POST /reservation/employees
 * @tag Reservation
 * @summary Create a new reservation employee
 * @description Creates a new reservation employee.
 * @operationId createReservationEmployee
 * @requestBody {CreateEmployeeInput} requestBody - The employee data to create.
 * @response 201 - Employee created successfully
 * @responseContent {Employee} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating employee
 */
export async function createEmployee(req: ValidatedRequest<CreateEmployeeInput>, res: Response): Promise<void> {
	try {
		let employeeData = req.body;
		let businessId = req.user?.business_id as string;
		if (!businessId) {
			res.status(400).json({ message: 'User has no business' });
			return;
		}
		let reservation_module_id = req.user?.reservation_module_id as string;
		const { businessUser } = await BusinessUsersDao.createBusinessUser(
			{
				email: employeeData.email,
				password: employeeData.password,
				first_name: employeeData.first_name,
				last_name: employeeData.last_name,
				telephone: employeeData.telephone,
				telephone_country_code: employeeData.telephone_code,
				telephone_number: employeeData.telephone_number,
			},
			businessId
		);
		let employee = await EmployeeDao.createEmployee({
			reservation_module_id: reservation_module_id,
			business_user_id: businessUser.business_user_id,
		});
		res.status(201).json(employee);
	} catch (error) {
		res.status(500).json({ message: 'Error creating employee', error });
	}
}

/**
 * DELETE /reservation/employees/{employee_id}
 * @tag Reservation
 * @summary Delete a reservation employee
 * @description Deletes a reservation employee by its ID.
 * @operationId deleteReservationEmployee
 * @pathParam {string} employee_id - The ID of the employee to delete.
 * @response 204 - Employee deleted successfully
 * @response 404 - Employee not found
 * @response 500 - Error deleting employee
 */
export async function deleteEmployee(req: Request, res: Response): Promise<void> {
	try {
		let employeeId = req.params.employee_id as string;
		await EmployeeDao.deleteEmployee(employeeId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting employee', error });
	}
}

/**
 * PUT /reservation/employees/{employee_id}
 * @tag Reservation
 * @summary Update a reservation employee
 * @description Updates a reservation employee by its ID.
 * @operationId updateReservationEmployee
 * @pathParam {string} employee_id - The ID of the employee to update.
 * @requestBody {UpdateEmployeeInput} requestBody - The employee data to update.
 * @response 200 - Employee updated successfully
 * @responseContent {Employee} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error updating employee
 */
export async function updateEmployee(
	req: ValidatedRequest<UpdateEmployeeInput, { employee_id: string }>,
	res: Response
): Promise<void> {
	try {
		let employeeId = req.params.employee_id;
		let employeeData = req.body;
		let employee = await EmployeeDao.updateEmployee(employeeId, employeeData);
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: 'Error updating employee', error });
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
 * @responseContent {Employee} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error retrieving employee
 */

export async function getEmployeeById(req: Request, res: Response): Promise<void> {
	try {
		let employeeId = req.params.employee_id as string;
		let employee = await EmployeeDao.getEmployeeById(employeeId);
		if (!employee) {
			res.status(404).json({ message: 'Employee not found' });
			return;
		}
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving employee', error });
	}
}

export default {
	getEmployees,
	createEmployee,
	deleteEmployee,
	updateEmployee,
	getEmployeeById,
};
