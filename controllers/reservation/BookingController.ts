import { Response } from 'express';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import BookingDao from '../../dao/reservation/Booking.ts';
import {
	UpdateBookingInput,
	CreateBookingHistoryLogInput,
	ListBookingsParams,
	FindBookingSlotsInput,
	CreateBookingInput,
	CreateBookingSingleInput,
	AllBookingsForLocationAndEmployeesParams,
	CreateMultipleBookingsInput,
} from '../../types/reservation/Booking.ts';
import { Employee } from '../../types/reservation/Employee.ts';
import { findSlots } from '../../lib/bookingHelpers.ts';
import prisma from '../../prisma/prisma.js';
import LocationDao from '../../dao/reservation/Location.ts';
import EmployeeDao from '../../dao/reservation/Employee.ts';
import ServiceDao from '../../dao/reservation/Service.ts';
import CustomerDao from '../../dao/reservation/Customer.ts';

/**
 * POST /bookings/list
 * @tag Reservation
 * @summary List bookings for the current reservation module
 * @operationId listBookings
 * @requestBody {ListBookingsParams} requestBody
 * @response 200 - Bookings retrieved
 * @responseContent {Booking[]} 200.application/json
 * @response 500 - Error retrieving bookings
 */
export async function listBookings(req: ValidatedRequest<ListBookingsParams>, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id || null;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const params: ListBookingsParams = {
			...req.body,
			reservation_module_id: reservationModuleId,
		};
		const bookings = await BookingDao.listBookingsByReservationModuleId(params);
		res.status(200).json(bookings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving bookings', error });
	}
}

/**
 * GET /bookings/{booking_id}
 * @tag Reservation
 * @summary Get a booking by ID
 * @operationId getBookingById
 * @pathParam {string} booking_id
 * @response 200 - Booking retrieved
 * @responseContent {Booking} 200.application/json
 * @response 404 - Booking not found
 * @response 500 - Error retrieving booking
 */
export async function getBooking(req: ValidatedRequest<null, { booking_id: string }>, res: Response): Promise<void> {
	try {
		const booking = await BookingDao.getBookingById({ booking_id: req.params.booking_id });
		if (!booking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving booking', error });
	}
}

/**
 * POST /bookings
 * @tag Reservation
 * @summary Create a new booking
 * @operationId createBooking
 * @requestBody {CreateBookingInput} requestBody
 * @response 201 - Booking created
 * @responseContent {Booking} 201.application/json
 * @response 500 - Error creating booking
 */
export async function createBooking(req: ValidatedRequest<CreateBookingInput>, res: Response): Promise<void> {
	const { service_ids, ...base } = req.body;
	const reservation_module_id = req.user?.reservation_module_id ?? base.reservation_module_id;
	let user_id = req.user?.user_id;
	let reservation_module = await prisma.reservation_module.findUnique({
		where: { reservation_module_id: reservation_module_id },
		include: {
			employees: {
				include: {
					business_user: true,
				},
			},
		},
	});
	let isEmployeeOfModule = false;
	if (reservation_module && user_id) {
		isEmployeeOfModule = reservation_module.employees.some((e: Employee) => e.business_user?.user_id === user_id);
	}
	console.log('isEmployeeOfModule:', isEmployeeOfModule);
	// map to DAO’s single-service input
	const inputs = service_ids.map((sid) => ({
		...base,
		reservation_module_id,
		service_id: sid,
		// parent_booking_id set inside DAO for children
	})) as CreateBookingSingleInput[];

	try {
		const all = await BookingDao.createBookingGroup(inputs, {
			validateSchedule: !isEmployeeOfModule, // <- only enforce schedules for externals
		});
		res.status(201).json({ parent: all[0], children: all.slice(1), all });
	} catch (error) {
		console.error('Error creating booking group:', error);
		res.status(500).json({
			message: error instanceof Error ? error.message : 'Error creating booking group',
			error,
		});
	}
}

/**
 * PUT /bookings/{booking_id}
 * @tag Reservation
 * @summary Update an existing booking
 * @operationId updateBooking
 * @pathParam {string} booking_id
 * @requestBody {UpdateBookingInput} requestBody
 * @response 200 - Booking updated
 * @responseContent {Booking} 200.application/json
 * @response 500 - Error updating booking
 */
export async function updateBooking(
	req: ValidatedRequest<UpdateBookingInput, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.updateBooking(
			{
				...req.body,
				reservation_module_id: req.user?.reservation_module_id,
			},
			req.params.booking_id
		);
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking', error });
	}
}

/**
 * DELETE /bookings/{booking_id}
 * @tag Reservation
 * @summary Delete a booking
 * @operationId deleteBooking
 * @pathParam {string} booking_id
 * @response 204 - Booking deleted
 * @response 500 - Error deleting booking
 */
export async function deleteBooking(req: ValidatedRequest<null, { booking_id: string }>, res: Response): Promise<void> {
	try {
		await BookingDao.deleteBooking({ booking_id: req.params.booking_id });
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting booking', error });
	}
}

/**
 * POST /bookings/{booking_id}/history
 * @tag Reservation
 * @summary Create a booking history log entry
 * @operationId createBookingHistoryLog
 * @pathParam {string} booking_id
 * @requestBody {CreateBookingHistoryLogInput} requestBody
 * @response 201 - Booking history log created
 * @responseContent {BookingHistoryLog} 201.application/json
 * @response 500 - Error creating booking history log
 */
export async function createBookingHistoryLog(
	req: ValidatedRequest<CreateBookingHistoryLogInput, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const log = await BookingDao.createBookingHistoryLog({
			...req.body,
			booking_id: req.params.booking_id,
			user_id: req.user?.user_id ?? undefined,
		});
		res.status(201).json(log);
	} catch (error) {
		res.status(500).json({ message: 'Error creating booking history log', error });
	}
}

/**
 * POST /bookings/find-slots
 * @tag Reservation
 * @summary Find available booking slots for given filters
 * @operationId findBookingSlots
 * @requestBody {object} requestBody
 * @property {string[]} serviceIds.required - IDs of services to check availability for
 * @property {string} [locationId] - Optional location ID
 * @property {string} [employeeId] - Optional employee ID
 * @property {string} reservationModuleId.required - Reservation module ID
 * @property {string} date.required - Date for which to find slots (ISO string)
 * @property {boolean} [returnFirst=false] - If true, return only the first available slot
 * @response 200 - Slots retrieved
 * @responseContent {any[]} 200.application/json
 * @response 500 - Error finding slots
 */
export async function findBookingSlots(req: ValidatedRequest<FindBookingSlotsInput>, res: Response): Promise<void> {
	try {
		// Destructure request body
		const { serviceIds, locationId, employeeId, reservationModuleId, date, returnFirst } = req.body;

		// Call helper function that contains the slot-finding logic
		const slots = await findSlots({
			serviceIds,
			locationId,
			employeeId,
			reservationModuleId,
			date,
			returnFirst,
		});

		// Return the found slots
		res.status(200).json(slots);
	} catch (error) {
		console.error('Error finding slots:', error);
		res.status(500).json({ message: 'Error finding slots', error });
	}
}

/**
 * GET /reservation/bookings/locations-and-employees
 * @tag Reservation
 * @summary Get all reservation locations and their employees for the current reservation module
 * @description Retrieves all reservation locations and their employees for the current reservation module.
 * @operationId getLocationsAndEmployees
 * @response 200 - Reservation locations and employees retrieved successfully
 * @responseContent {bookings, employees} 200.application/json
 * @response 500 - Error retrieving locations and employees
 */
export async function getLocationsAndEmployees(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let locations = await LocationDao.getLocationsByReservationModuleId(reservationModuleId);
		let employees = await EmployeeDao.getEmployeesByReservationModuleId(reservationModuleId);
		res.status(200).json({ locations, employees });
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving locations', error });
	}
}

/**
 * POST /reservation/bookings/bookings-location-and-employees
 * @tag Reservation
 * @summary Get all bookings for given location and employees within a date range
 * @description Retrieves all bookings for a specified location and employees within a given date range.
 * @operationId getBookingsForLocationAndEmployees
 * @requestBody {AllBookingsForLocationAndEmployeesParams} requestBody - The input data for retrieving bookings.
 * @response 200 - Reservation bookings and employees retrieved successfully
 * @responseContent {Employee[]} 200.application/json
 * @response 500 - Error retrieving employees with schedule slots
 */
export async function getBookingsForLocationAndEmployees(
	req: ValidatedRequest<AllBookingsForLocationAndEmployeesParams>,
	res: Response
): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let employeeIds = req.body.employeeIds as string[];
		let locationId = req.body.locationId as string;
		let startDate = req.body.startDate as string;
		let endDate = req.body.endDate as string;

		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let bookings = await BookingDao.getBookingsByEmployeeIdsLocationAndDates(
			employeeIds,
			startDate,
			endDate,
			locationId,
			reservationModuleId
		);
		let employees = await EmployeeDao.getScheduleSlotsByEmployeesIdAndDate(
			employeeIds,
			reservationModuleId,
			startDate,
			endDate
		);
		let employeeMap = employees.map((e) => {
			const scheduleSlots = e.schedule_slots;
			const scheduleBookingSlots = scheduleSlots?.map((slot) => slot.booking_slots).flat();
			const scheduleSlotExceptions = scheduleSlots?.map((slot) => slot.schedule_slot_exceptions).flat();
			const bookingReorder = scheduleBookingSlots
				? scheduleBookingSlots.sort((a, b) => {
						if (!a && !b) return 0;
						if (!a) return 1;
						if (!b) return -1;
						return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
					})
				: [];
			const exceptionsReorder = scheduleSlotExceptions
				? scheduleSlotExceptions.sort((a, b) => {
						if (!a && !b) return 0;
						if (!a) return 1;
						if (!b) return -1;
						return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
					})
				: [];

			return {
				...e,
				schedule_slots: undefined,
				booking_slots: bookingReorder,
				schedule_slot_exceptions: exceptionsReorder,
			};
		});
		res.status(200).json({ bookings, employees: employeeMap });
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving employees with schedule slots', error });
	}
}

/**
 * GET /reservation/bookings/services-and-employees
 * @tag Reservation
 * @summary Get all reservation services and their employees for the current reservation module
 * @description Retrieves all reservation services and their employees for the current reservation module.
 * @operationId getServicesAndEmployees
 * @response 200 - Reservation locations and employees retrieved successfully
 * @responseContent {services, employees} 200.application/json
 * @response 500 - Error retrieving locations and employees
 */
export async function getServicesAndEmployees(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let services = await ServiceDao.getServicesByReservationId(reservationModuleId);
		let employees = await EmployeeDao.getEmployeesByReservationModuleId(reservationModuleId);
		let customers = await CustomerDao.getCustomersByReservationModuleId(reservationModuleId);

		res.status(200).json({ services, employees, customers });
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving form data', error });
	}
}

/**
 * POST /bookings/create-booking-admin
 * @tag Reservation
 * @summary Create a new booking
 * @operationId createBooking
 * @requestBody {CreateBookingInput} requestBody
 * @response 201 - Booking created
 * @responseContent {Booking} 201.application/json
 * @response 500 - Error creating booking
 */
export async function createBookingAdmin(
	req: ValidatedRequest<CreateMultipleBookingsInput>,
	res: Response
): Promise<void> {
	const { bookings, ...base } = req.body;
	const reservation_module_id = req.user?.reservation_module_id ?? base.reservation_module_id;
	let user_id = req.user?.user_id;
	let reservation_module = await prisma.reservation_module.findUnique({
		where: { reservation_module_id: reservation_module_id },
		include: {
			employees: {
				include: {
					business_user: true,
				},
			},
		},
	});
	let isEmployeeOfModule = false;
	if (reservation_module && user_id) {
		isEmployeeOfModule = reservation_module.employees.some((e: Employee) => e.business_user?.user_id === user_id);
	}
	//console.log('isEmployeeOfModule:', isEmployeeOfModule);
	//console.log(bookings);

	// map to DAO’s single-service input
	const inputs = bookings.map((booking) => ({
		...base,
		...booking,
		reservation_module_id,
		// parent_booking_id set inside DAO for children
	})) as CreateBookingSingleInput[];
	//console.log(inputs);

	try {
		const all = await BookingDao.createBookingGroup(inputs, {
			validateSchedule: !isEmployeeOfModule, // <- only enforce schedules for externals
			ignoreBooking: true,
		});
		res.status(201).json({ parent: all[0], children: all.slice(1), all });
	} catch (error) {
		console.error('Error creating booking group:', error);
		res.status(500).json({
			message: error instanceof Error ? error.message : 'Error creating booking group',
			error,
		});
	}
}

export default {
	listBookings,
	getBooking,
	createBooking,
	updateBooking,
	deleteBooking,
	createBookingHistoryLog,
	findBookingSlots,
	getLocationsAndEmployees,
	getBookingsForLocationAndEmployees,
	getServicesAndEmployees,
	createBookingAdmin,
};
