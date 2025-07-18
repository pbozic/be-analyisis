import prisma from '../../prisma/prisma';
import type { Employee, UpdateEmployeeInput } from '../../types/reservation/Employee.ts';

/**
 * Retrieves all employees for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve employees for.
 * @returns {Promise<Employee[]>} A promise that resolves to an array of employees.
 * @throws {Error} If there is an error retrieving the employees.
 */
export async function getEmployeesByReservationModuleId(reservationModuleId: string): Promise<Employee[]> {
	try {
		let employees = await prisma.employee.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				reservation_module: true,
				services: true,
				schedules: {
					include: {
						schedule_slots: {
							include: {
								schedule_exceptions: true,
								booking_slots: true,
							},
						},
					},
				},
			},
		});
		return employees;
	} catch (error) {
		throw new Error('Error retrieving employees');
	}
}

/**
 * Creates a new employee.
 * @param {{
 * 	reservation_module_id: string;
 * 	business_user_id: string;
 * }} employeeData - The data for the new employee.
 * @returns {Promise<Employee>} A promise that resolves to the created employee.
 * @throws {Error} If there is an error creating the employee.
 */
export async function createEmployee(employeeData: {
	reservation_module_id: string;
	business_user_id: string;
}): Promise<Employee> {
	try {
		let employee = await prisma.employee.create({
			data: employeeData,
		});
		return employee;
	} catch (error) {
		throw new Error('Error creating employee');
	}
}
/**
 * Deletes an employee by its ID.
 * @param {string} employeeId - The ID of the employee to delete.
 * @returns {Promise<void>} A promise that resolves when the employee is deleted.
 * @throws {Error} If there is an error deleting the employee.
 */
export async function deleteEmployee(employeeId: string): Promise<void> {
	try {
		await prisma.employee.delete({
			where: {
				employee_id: employeeId,
			},
		});
	} catch (error) {
		throw new Error('Error deleting employee');
	}
}
/**
 * Updates an existing employee.
 * @param {string} employeeId - The ID of the employee to update.
 * @param {UpdateEmployeeInput} employeeData - The data to update the employee with.
 * @returns {Promise<Employee>} A promise that resolves to the updated employee.
 * @throws {Error} If there is an error updating the employee.
 */
export async function updateEmployee(employeeId: string, employeeData: UpdateEmployeeInput): Promise<Employee> {
	try {
		let employee = await prisma.employee.update({
			where: {
				employee_id: employeeId,
			},
			data: employeeData,
		});
		return employee;
	} catch (error) {
		throw new Error('Error updating employee');
	}
}

/**
 * Retrieves an employee by its ID.
 * @param employeeId - The ID of the employee to retrieve.
 * @returns A promise that resolves to the employee, or null if not found.
 */

export async function getEmployeeById(employeeId: string): Promise<Employee | null> {
	try {
		let employee = await prisma.employee.findUnique({
			where: {
				employee_id: employeeId,
			},
			include: {
				reservation_module: true,
				assigned_services: true,
			},
		});
		return employee;
	} catch (error) {
		throw new Error('Error retrieving employee');
	}
}

export default {
	getEmployeesByReservationModuleId,
	createEmployee,
	deleteEmployee,
	updateEmployee,
	getEmployeeById,
};
