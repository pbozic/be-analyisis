import prisma from '../../prisma/prisma';
import type { Employee, UpdateEmployeeInput } from '../../types/reservation/Employee.ts';

const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};

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
				assignments: true,
				schedules: {
					include: {
						schedule_slots: {
							include: {
								schedule_slot_exceptions: true,
								booking_slots: true,
							},
						},
					},
				},
				business_user: {
					select: {
						business_users_id: true,
						business_id: true,
						user_id: true,
						users: {
							select: cropped_user_columns,
						},
					},
				},
			},
		});
		return employees;
	} catch (error) {
		console.log('Error retrieving employees:', error);
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
		let employee = await prisma.employee.findUnique({
			where: {
				employee_id: employeeId,
			},
		});
		if (!employee) {
			throw new Error('Employee not found');
		}
		// Delete the employee and all related data

		await prisma.business_users.delete({
			where: {
				business_users_id: employee.business_user_id,
			},
		});
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
		let employee = await prisma.employee.findFirst({
			where: {
				employee_id: employeeId,
			},
		});
		if (!employee) {
			throw new Error('Employee not found');
		}
		let businessUser = await prisma.business_users.findFirst({
			where: {
				business_users_id: employee.business_user_id,
			},
		});

		if (!businessUser) {
			throw new Error('Business user not found');
		}
		// TODO: cannot delete ADMIN user
		let user = await prisma.users.findFirst({
			where: {
				user_id: businessUser.user_id,
			},
		});
		if (!user) {
			throw new Error('User not found');
		}
		await prisma.users.update({
			where: {
				user_id: user.user_id,
			},
			data: {
				first_name: employeeData.first_name,
				last_name: employeeData.last_name,
				email: employeeData.email,
				telephone: employeeData.telephone,
				telephone_code: employeeData.telephone_code,
				telephone_number: employeeData.telephone_number,
				date_of_birth: employeeData.date_of_birth,
			},
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
				assignments: {
					include: {
						service: true,
						schedule: {
							include: {
								schedule_slots: {
									include: {
										schedule_slot_exceptions: true,
										booking_slots: true,
									},
								},
							},
						},
					},
				},
				business_users: {
					include: {
						users: true,
					},
				},
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
