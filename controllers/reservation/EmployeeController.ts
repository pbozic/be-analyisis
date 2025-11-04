import { Request, Response } from 'express';

import EmployeeDao from '../../dao/reservation/Employee.ts';
import BusinessUsersDao from '../../dao/BusinessUsers.js';
import UserDao from '../../dao/User.js';
import ScheduleDao from '../../dao/reservation/Schedule.ts';
import BookingDao from '../../dao/reservation/Booking.ts';
import ScheduleEmployeeDao from '../../dao/reservation/ScheduleEmployee.ts';
import { CreateEmployeeInput, UpdateEmployeeInput } from '../../types/reservations/Employee.ts';
import { ListBookingsParams, BookingsAnalyticsParams } from '../../types/reservations/Booking.ts';
import { GetSchedulesWithSlotsInput } from '../../types/reservations/Schedule.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import { calcBookings } from './BookingController.ts';
import { BusinessUser } from '../../types/businessUsers/BusinessUser.ts';

/**
 * GET /reservation/employees
 * @tag Reservation
 * @summary Get all reservation employees
 * @description Retrieves all reservation employees.
 * @operationId getReservationEmployees
 * @response 200 - Reservation employees retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving employees
 * @prisma_model employee
 */
export async function getEmployees(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
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
 * @bodyContent {object} application/json
 * @response 201 - Employee created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating employee
 * @prisma_model employee
 * @prisma_model business_users
 * @prisma_model users
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
		let userExists = await UserDao.getUserByEmail(employeeData.email, {});
		if (!userExists) {
			userExists = await UserDao.getUserByTelephone(employeeData.telephone, {});
		}
		const { businessUser } = await BusinessUsersDao.createBusinessUser(
			{
				data: {
					email: employeeData.email,
					password: employeeData.password,
					first_name: employeeData.first_name,
					last_name: employeeData.last_name,
					telephone: employeeData.telephone,
					telephone_code: employeeData.telephone_code,
					// telephone_number: employeeData.telephone_number,
				},
			},
			businessId,
			!userExists
		);
		let employee = await EmployeeDao.createEmployee({
			reservation_module_id: reservation_module_id,
			// @ts-ignore
			business_users_id: businessUser.business_users_id,
			first_name: employeeData.first_name,
			last_name: employeeData.last_name,
			email: employeeData.email,
			telephone: employeeData.telephone as string,
			telephone_code: employeeData.telephone_code as string,
			// telephone_number: employeeData.telephone_number as string,
		});
		res.status(201).json(employee);
	} catch (error) {
		res.status(500).json({ message: 'Error creating employee', error });
	}
}

/**
 * DELETE /reservation/employees/:employee_id
 * @tag Reservation
 * @summary Delete a reservation employee
 * @description Deletes a reservation employee by its ID.
 * @operationId deleteReservationEmployee
 * @pathParam {string} employee_id - The ID of the employee to delete.
 * @response 204 - Employee deleted successfully
 * @response 404 - Employee not found
 * @response 500 - Error deleting employee
 * @prisma_model employee
 * @prisma_model business_users
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
 * PUT /reservation/employees/:employee_id
 * @tag Reservation
 * @summary Update a reservation employee
 * @description Updates a reservation employee by its ID.
 * @operationId updateReservationEmployee
 * @pathParam {string} employee_id - The ID of the employee to update.
 * @bodyContent {object} application/json
 * @response 200 - Employee updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error updating employee
 * @prisma_model employee
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
 * GET /reservation/employees/:employee_id
 * @tag Reservation
 * @summary Get a reservation employee by ID
 * @description Retrieves a reservation employee by its ID.
 * @operationId getReservationEmployeeById
 * @pathParam {string} employee_id - The ID of the employee to retrieve.
 * @response 200 - Employee retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error retrieving employee
 * @prisma_model employee
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

/**
 * POST /reservation/employees/employees-with-schedule-slots
 * @tag Reservation
 * @summary Get all reservation employees with schedule slots
 * @description Retrieves all reservation employees with their schedule slots.
 * @operationId getEmployeesWithScheduleSlots
 * @bodyContent {object} application/json
 * @response 200 - Reservation employees with schedule slots retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving employees with schedule slots
 * @prisma_model employee
 * @prisma_model schedule_slot
 */
export async function getEmployeesWithScheduleSlots(
	req: ValidatedRequest<GetSchedulesWithSlotsInput>,
	res: Response
): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let schedule_id = req.body.schedule_id as string;
		let startDate = req.body.startDate as string;
		let endDate = req.body.endDate as string;

		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let schedule = await ScheduleDao.getScheduleById(schedule_id);
		let employee = await ScheduleEmployeeDao.getScheduleEmployeesByScheduleId(schedule_id);
		const employee_ids = employee.map((emp) => emp.employee_id);
		let employeesData = await EmployeeDao.getEmployeesByReservationModuleIdWithSlots(
			reservationModuleId,
			startDate,
			endDate,
			employee_ids
		);
		const employees = employeesData.map((emp) => {
			const fEmployee = employee.find((e) => e.employee_id === emp.employee_id);
			return {
				...emp,
				...fEmployee,
			};
		});
		res.status(200).json({ employees, schedule });
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving employees with schedule slots', error });
	}
}

/**
 * POST /reservation/employees/with-schedules/:employee_id
 * @tag Reservation
 * @summary Get a reservation employee with schedules and analytics
 * @description Retrieves a reservation employee by its ID with schedules and booking analytics.
 * @operationId getReservationEmployeeWithSchedules
 * @pathParam {string} employee_id - The ID of the employee to retrieve.
 * @bodyContent {object} application/json
 * @response 200 - Employee retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Employee not found
 * @response 500 - Error retrieving employee
 * @prisma_model employee
 * @prisma_model schedule
 * @prisma_model booking
 */

export async function getEmployeeByIdWithSchedules(
	req: ValidatedRequest<BookingsAnalyticsParams, { employee_id: string }>,
	res: Response
): Promise<void> {
	try {
		let employeeId = req.params.employee_id as string;
		const reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let employeeData = await EmployeeDao.getEmployeeByIdWithSchedules(employeeId);
		if (!employeeData) {
			res.status(404).json({ message: 'Employee not found' });
			return;
		}
		const employeeSchedule = employeeData?.schedules?.map((es) => es.schedule);

		const params: ListBookingsParams = {
			...req.body,
			employee_id: employeeId,
			status: ['reserved', 'cancelled', 'no_show'],
			reservation_module_id: reservationModuleId,
		};
		const bookings = await BookingDao.getBookingsForAnalytics(params);
		const paramsPrev: ListBookingsParams = {
			...req.body,
			reservation_module_id: reservationModuleId,
			employee_id: employeeId,
			status: ['reserved', 'cancelled', 'no_show'],
			from: req.body.prevFrom,
			to: req.body.prevTo,
		};
		const bookingsPrev = await BookingDao.getBookingsForAnalytics(paramsPrev);
		const data = req.body.from
			? calcBookings(bookings, req.body.from.toISOString())
			: { noShows: 0, cancels: 0, totalPrice: 0, newCustomers: 0, newCustomersBookings: 0 };
		const dataPrev = req.body.prevFrom
			? calcBookings(bookingsPrev, req.body.prevFrom.toISOString())
			: { noShows: 0, cancels: 0, totalPrice: 0, newCustomers: 0, newCustomersBookings: 0 };
		const employee = {
			...employeeData,
			schedules: employeeSchedule,
			bookings: { ...data, bookingsCount: bookings?.length || 0 },
			bookingsPrev: { ...dataPrev, bookingsCount: bookingsPrev?.length || 0 },
		};
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving employee with data', error });
	}
}

export default {
	getEmployees,
	createEmployee,
	deleteEmployee,
	updateEmployee,
	getEmployeeById,
	getEmployeesWithScheduleSlots,
	getEmployeeByIdWithSchedules,
};
