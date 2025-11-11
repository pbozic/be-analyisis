import { Response } from 'express';
import moment, { Moment, unitOfTime } from 'moment';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import BookingDao from '../../dao/reservation/Booking.ts';
import {
	UpdateBookingRequest,
	ListBookingsParams,
	FindBookingSlotsRequest,
	CreateBookingRequest,
	CreateBookingSingleRequest,
	AllBookingsForLocationAndEmployeesRequest,
	CreateMultipleBookingsRequest,
	UpdateMultipleBookingsRequest,
	BookingsAnalyticsParams,
	CreateBookingCourseRequest,
	UpdateBookingCourseRequest,
} from '../../schemas/dto/reservations/booking/booking.dto.js';
import { CreateBookingHistoryLogRequest } from '../../schemas/dto/reservations/booking-history-log/booking-history-log.dto.js';
import {
	CreateBookingCourseParticipantRequest,
	UpdateBookingCourseParticipantRequest,
} from '../../schemas/dto/reservations/booking-course-participant/booking-course-participant.dto.js';
// Keep old types that don't have DTO equivalents
// Use DTO response types instead of legacy Booking
import type { BookingForAnalyticsDAOResponse } from '../../schemas/dto/reservations/booking/booking.dto.js';
import type {
	EmployeeDAOResponse,
	EmployeeScheduleSlotsDAOResponse,
	ScheduleSlotWithBookingsAndExceptions,
} from '../../schemas/dto/reservations/employee/employee.dto.js';
import type { BookingSlotBase } from '../../schemas/dto/reservations/booking-slot/booking-slot.dto.js';
import type { ScheduleSlotExceptionBase } from '../../schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.dto.js';
import { findSlots } from '../../lib/bookingHelpers.ts';
import prisma from '../../prisma/prisma.js';
import LocationDao from '../../dao/reservation/Location.ts';
import EmployeeDao from '../../dao/reservation/Employee.ts';
import ServiceDao from '../../dao/reservation/Service.ts';
import CustomerDao from '../../dao/reservation/Customer.ts';
// Import DTO types for API documentation
//import type {
//	BookingResponse,
//	BookingGroupResponse,
//	BookingCourseDAOResponse,
//	BookingCoursesByModuleDAOResponse,
//	BookingsAnalyticsResponse,
//	BookingsAndEmployeesWithSlotsResponse,
//	UpdateBookingGroupResponse,
//} from '../../schemas/dto/reservations/booking/booking.dto.js';
//import type { BookingHistoryLogRef } from '../../schemas/dto/reservations/booking-history-log/booking-history-log.dto.js';
//import type { BookingCourseParticipantRef } from '../../schemas/dto/reservations/booking-course-participant/booking-course-participant.dto.js';

/**
 * POST /reservation/reservations/bookings/list
 * @tag Reservation
 * @summary List bookings for the current reservation module
 * @operationId listBookings
 * @bodyContent {ListBookingsParams} application/json
 * @response 200 - Bookings retrieved
 * @responseContent {BookingCoursesDAOResponse[]} 200.application/json
 * @response 500 - Error retrieving bookings
 * @prisma_model booking
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
 * GET /reservation/reservations/bookings/:booking_id
 * @tag Reservation
 * @summary Get a booking by ID
 * @operationId getBookingById
 * @pathParam {string} booking_id
 * @response 200 - Booking retrieved
 * @responseContent {BookingResponse} 200.application/json
 * @response 404 - Booking not found
 * @response 500 - Error retrieving booking
 * @prisma_model booking
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
 * POST /reservation/booking
 * @tag Reservation
 * @summary Create a new booking (public flow)
 * @operationId createBooking
 * @bodyContent {CreateBookingInput} application/json
 * @response 201 - Booking created
 * @responseContent {BookingGroupResponse} 201.application/json
 * @response 500 - Error creating booking
 * @prisma_model reservation_module
 * @prisma_model booking
 * @prisma_model booking_history_log
 * @prisma_model customers
 * @prisma_model service
 * @prisma_model location
 * @prisma_model employee
 */
export async function createBooking(req: ValidatedRequest<CreateBookingRequest>, res: Response): Promise<void> {
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
		isEmployeeOfModule = reservation_module.employees.some(
			(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
		);
	}
	// map to DAO’s single-service input
	const inputs = service_ids.map((sid) => ({
		...base,
		reservation_module_id,
		service_id: sid,
		// parent_booking_id set inside DAO for children
	})) as CreateBookingSingleRequest[];

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
 * PUT /reservation/reservations/bookings/:booking_id
 * @tag Reservation
 * @summary Update an existing booking
 * @operationId updateBooking
 * @pathParam {string} booking_id
 * @bodyContent {UpdateBookingRequest} application/json
 * @response 200 - Booking updated
 * @responseContent {BookingResponse} 200.application/json
 * @response 500 - Error updating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBooking(
	req: ValidatedRequest<UpdateBookingRequest, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.updateBooking(
			{
				...req.body,
				reservation_module_id: req.user?.reservation_module_id,
			},
			req.params.booking_id,
			false
		);
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking', error });
	}
}

/**
 * DELETE /reservation/reservations/bookings/:booking_id
 * @tag Reservation
 * @summary Delete a booking by ID
 * @operationId deleteBooking
 * @pathParam {string} booking_id
 * @response 204 - Booking deleted
 * @response 500 - Error deleting booking
 * @prisma_model booking
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
 * POST /reservation/reservations/bookings/:booking_id/history
 * @tag Reservation
 * @summary Create a booking history log entry
 * @operationId createBookingHistoryLog
 * @pathParam {string} booking_id
 * @bodyContent {CreateBookingHistoryLogRequest} application/json
 * @response 201 - Booking history log created
 * @responseContent {BookingHistoryLogRef} 201.application/json
 * @response 500 - Error creating booking history log
 * @prisma_model booking_history_log
 * @prisma_model booking
 */
export async function createBookingHistoryLog(
	req: ValidatedRequest<CreateBookingHistoryLogRequest, { booking_id: string }>,
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
 * POST /reservation/booking/find-slots
 * @tag Reservation
 * @summary Find available booking slots
 * @operationId findBookingSlots
 * @bodyContent {FindBookingSlotsSchema} application/json
 * @response 200 - Slots retrieved
 * @responseContent {BookingSlot[]} 200.application/json
 * @response 500 - Error retrieving slots
 * @prisma_model booking
 * @prisma_model schedule_slot
 * @prisma_model schedule_slot_exception
 */
export async function findBookingSlots(req: ValidatedRequest<FindBookingSlotsRequest>, res: Response): Promise<void> {
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
 * GET /reservation/reservations/bookings/locations-and-employees
 * @tag Reservation
 * @summary Get all reservation locations and their employees for the current reservation module
 * @description Retrieves all reservation locations and their employees for the current reservation module.
 * @operationId getLocationsAndEmployees
 * @response 200 - Reservation locations and employees retrieved successfully
 * @responseContent {{locations: LocationRefSchema[], employees: EmployeeDetailSchema[]}} 200.application/json
 * @response 500 - Error retrieving locations and employees
 * @prisma_model location
 * @prisma_model employee
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
 * POST /reservation/reservations/bookings/bookings-locations-and-employees
 * @tag Reservation
 * @summary Get all bookings for given location and employees within a date range
 * @description Retrieves all bookings for a specified location and employees within a given date range.
 * @operationId getBookingsForLocationAndEmployees
 * @bodyContent {AllBookingsForLocationAndEmployeesParams} application/json
 * @response 200 - Reservation bookings and employees retrieved successfully
 * @responseContent {BookingsAndEmployeesWithSlotsResponse} 200.application/json
 * @response 500 - Error retrieving employees with schedule slots
 * @prisma_model booking
 * @prisma_model employee
 * @prisma_model schedule_slot
 * @prisma_model schedule_slot_exceptions
 * @prisma_model booking_slots
 */
export async function getBookingsForLocationAndEmployees(
	req: ValidatedRequest<AllBookingsForLocationAndEmployeesRequest>,
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
		let employeeMap = employees.map((e: EmployeeScheduleSlotsDAOResponse) => {
			const scheduleSlots = e.schedule_slots;

			const scheduleBookingSlots = scheduleSlots
				?.map((slot: ScheduleSlotWithBookingsAndExceptions) =>
					slot && 'booking_slots' in slot ? slot.booking_slots : undefined
				)
				.flat();
			const scheduleSlotExceptions = scheduleSlots
				?.map((slot: ScheduleSlotWithBookingsAndExceptions) =>
					slot && 'schedule_slot_exceptions' in slot ? slot.schedule_slot_exceptions : undefined
				)
				.flat();
			const bookingReorder = scheduleBookingSlots
				? scheduleBookingSlots.sort((a: BookingSlotBase | undefined, b: BookingSlotBase | undefined) => {
						if (!a && !b) return 0;
						if (!a) return 1;
						if (!b) return -1;
						return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
					})
				: [];
			const exceptionsReorder = scheduleSlotExceptions
				? scheduleSlotExceptions.sort(
						(a: ScheduleSlotExceptionBase | undefined, b: ScheduleSlotExceptionBase | undefined) => {
							if (!a && !b) return 0;
							if (!a) return 1;
							if (!b) return -1;
							return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
						}
					)
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
 * GET /reservation/reservations/bookings/services-and-employees
 * @tag Reservation
 * @summary Get all reservation services and their employees for the current reservation module
 * @description Retrieves all reservation services and their employees for the current reservation module.
 * @operationId getServicesAndEmployees
 * @response 200 - Reservation locations and employees retrieved successfully
 * @responseContent {{services: ServiceRefSchema[], employees: EmployeeDetailSchema[], customers: CustomerDetailSchema[]}} 200.application/json
 * @response 500 - Error retrieving locations and employees
 * @prisma_model service
 * @prisma_model employee
 * @prisma_model customers
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
 * Split consecutive slots into groups
 * @param {(CreateBookingSingleRequest | UpdateBookingRequest)[]} slots - The list of slots to split.
 * @returns {(CreateBookingSingleRequest | UpdateBookingRequest)[]} - The list of slots split into groups.
 * @description This function takes an array of slots and splits them into groups of consecutive slots.
 */
function splitConsecutiveSlots(
	slots: (CreateBookingSingleRequest | UpdateBookingRequest)[]
): (CreateBookingSingleRequest | UpdateBookingRequest)[][] {
	if (slots.length === 0) return [];

	const result: (CreateBookingSingleRequest | UpdateBookingRequest)[][] = [];
	if (slots[0]) {
		let currentGroup: (CreateBookingSingleRequest | UpdateBookingRequest)[] = [slots[0]];

		for (let i = 1; i < slots.length; i++) {
			const prev = slots[i - 1];
			const curr = slots[i];
			if (curr && prev) {
				if (prev?.end_time === curr?.start_time) {
					// same chain → keep in current group
					currentGroup.push(curr);
				} else {
					// break → push group and start a new one
					result.push(currentGroup);
					currentGroup = [curr];
				}
			} else return [];
		}

		// push last group
		result.push(currentGroup);

		return result;
	} else return [];
}

/**
 * POST /reservation/reservations/bookings/create-booking-admin
 * @tag Reservation
 * @summary Create a new booking (admin group)
 * @operationId createBookingAdmin
 * @bodyContent {CreateMultipleBookingsInput} application/json
 * @response 201 - Booking created
 * @responseContent {{result: BookingGroupUpdateResult[]}} 201.application/json
 * @response 500 - Error creating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function createBookingAdmin(
	req: ValidatedRequest<CreateMultipleBookingsRequest>,
	res: Response
): Promise<void> {
	const { bookings, ...base } = req.body;
	const reservation_module_id = req.user?.reservation_module_id;
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
		isEmployeeOfModule = reservation_module.employees.some(
			(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
		);
	}
	// map to DAO’s single-service input
	if (isEmployeeOfModule) {
		const inputs = bookings.map((booking) => ({
			...base,
			...booking,
			reservation_module_id,
			// parent_booking_id set inside DAO for children
		})) as CreateBookingSingleRequest[];
		const splittedInputs = splitConsecutiveSlots(inputs);

		try {
			const result = await Promise.all(
				splittedInputs.map(async (el) => {
					const all = await BookingDao.createBookingGroup(el as CreateBookingSingleRequest[], {
						validateSchedule: !isEmployeeOfModule, // <- only enforce schedules for externals
						ignoreBooking: true,
					});
					return {
						parent: all[0],
						children: all.slice(1),
						all,
					};
				})
			);
			res.status(201).json({ result });
		} catch (error) {
			console.error('Error creating booking group:', error);
			res.status(500).json({
				message: error instanceof Error ? error.message : 'Error creating booking group',
				error,
			});
		}
	} else {
		res.status(400).json({ message: 'User is not an employee of the reservation module' });
	}
}

/**
 * PUT /reservation/reservations/bookings/update-booking-start-admin/:booking_id
 * @tag Reservation
 * @summary Update an existing booking start
 * @operationId updateBookingStartAdmin
 * @pathParam {string} booking_id
 * @bodyContent {UpdateBookingRequest} application/json
 * @response 200 - Booking updated
 * @responseContent {BookingResponse} 200.application/json
 * @response 500 - Error updating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBookingStartAdmin(
	req: ValidatedRequest<UpdateBookingRequest, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
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
			isEmployeeOfModule = reservation_module.employees.some(
				(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
			);
		}
		if (isEmployeeOfModule) {
			const booking = await BookingDao.updateBookingStart(req.body, req.params.booking_id, user_id);
			res.status(200).json(booking);
		} else {
			res.status(400).json({ message: 'User is not an employee of the reservation module' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking start and end', error });
	}
}

/**
 * GET /reservation/reservations/bookings/get-booking-admin/:booking_id
 * @tag Reservation
 * @summary Get a booking by ID (with children)
 * @operationId getBookingAdmin
 * @pathParam {string} booking_id
 * @response 200 - Booking retrieved
 * @responseContent {BookingResponse[]} 200.application/json
 * @response 404 - Booking not found
 * @response 500 - Error retrieving booking
 * @prisma_model booking
 */
export async function getBookingAdmin(
	req: ValidatedRequest<null, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.getBookingByIdWithChildren(req.params.booking_id);
		if (!booking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		const children = booking?.child_bookings || [];
		const bookings = [booking, ...children];
		res.status(200).json(bookings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving booking', error });
	}
}

/**
 * Calcs duration between two ISO strings
 * @param {string} startIso - The start time.
 * @param {string} endIso - The end time.
 * @returns {number} - The duration in minutes.
 * @description Calculates the duration between two ISO strings in minutes.
 */
function durationInMinutes(startIso: string | undefined, endIso: string | undefined): number {
	if (!startIso || !endIso) return 0;

	const start = new Date(startIso);
	const end = new Date(endIso);

	if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0; // invalid date check

	return Math.floor((end.getTime() - start.getTime()) / (1000 * 60));
}

/**
 * PUT /reservation/reservations/bookings/update-booking-start-admin-group/:booking_id
 * @tag Reservation
 * @summary Update an existing booking group start
 * @operationId updateBookingStartGroupAdmin
 * @pathParam {string} booking_id
 * @bodyContent {UpdateBookingRequest} application/json
 * @response 200 - Bookings updated
 * @responseContent {{updatedBookings: BookingResponse[]}} 200.application/json
 * @response 500 - Error updating booking group
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBookingStartGroupAdmin(
	req: ValidatedRequest<UpdateBookingRequest, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
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
			isEmployeeOfModule = reservation_module.employees.some(
				(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
			);
		}
		if (isEmployeeOfModule) {
			const inputs = req.body;
			const start_time = inputs?.start_time;
			const end_time = inputs?.end_time;
			// If this is the first booking in the group (it is parent booking)
			if (!inputs?.parent_booking_id && start_time && end_time) {
				const bookingsData = await BookingDao.getBookingByIdWithChildren(req.params.booking_id);
				if (!bookingsData) {
					res.status(404).json({ message: 'Booking not found' });
					return;
				}
				const bookings = [bookingsData, ...(bookingsData.child_bookings ?? [])];
				// If this is first booking in the group and it is set to keep time gaps when moving
				if (inputs?.keepTimeGaps) {
					let end = '';
					let previousEnd = '';
					const newBookings = bookings.map((booking, i) => {
						if (i === 0) {
							end = end_time;
							previousEnd = booking?.end_time ?? '';
							return {
								booking_id: booking.booking_id,
								start_time: inputs.start_time,
								end_time: end,
							};
						} else {
							const durationBetween = durationInMinutes(previousEnd, booking?.start_time ?? undefined);
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const nStart = new Date(end);
							const new_start_time = nStart.setMinutes(nStart.getMinutes() + durationBetween);
							const nEnd = new Date(new_start_time);
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							end = new Date(new_end_time).toISOString();
							previousEnd = booking?.end_time ?? '';
							return {
								booking_id: booking.booking_id,
								start_time: new Date(new_start_time).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						}
					});
					const updatedBookings = await Promise.all(
						newBookings.map(async (el) => {
							const booking = await BookingDao.updateBookingStart(
								el as UpdateBookingRequest,
								el.booking_id,
								user_id
							);
							return booking;
						})
					);
					res.status(200).json({ updatedBookings });
				} else {
					// If this is first booking in the group and you set to no time gaps when moving
					let end = '';
					const newBookings = bookings.map((booking, i) => {
						if (i === 0) {
							end = end_time;
							return {
								booking_id: booking.booking_id,
								start_time: inputs.start_time,
								end_time: end,
							};
						} else {
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const new_start_time = new Date(end);
							const nEnd = new_start_time;
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							end = new Date(new_end_time).toISOString();
							return {
								booking_id: booking.booking_id,
								start_time: new Date(new_start_time).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						}
					});
					const updatedBookings = await Promise.all(
						newBookings.map(async (el) => {
							const booking = await BookingDao.updateBookingStart(
								el as UpdateBookingRequest,
								el.booking_id,
								user_id
							);
							return booking;
						})
					);
					res.status(200).json({ updatedBookings });
				}
			} else if (inputs.parent_booking_id && start_time && end_time) {
				// If this is not the first booking in the group
				const bookingsData = await BookingDao.getBookingByIdWithChildren(inputs.parent_booking_id);
				if (!bookingsData) {
					res.status(404).json({ message: 'Booking not found' });
					return;
				}
				const bookings = [bookingsData, ...(bookingsData.child_bookings ?? [])];
				const findBookingIndex = bookings.findIndex((b) => b.booking_id === req.params.booking_id);
				const findBooking = bookings.find((b) => b.booking_id === req.params.booking_id);
				// If this is not the first booking in the group and it is set to keep time gaps when moving
				if (inputs.keepTimeGaps) {
					const calcDuration = durationInMinutes(
						bookingsData?.start_time ?? undefined,
						findBooking?.start_time ?? undefined
					);
					const inputStart = new Date(start_time);
					const firstStart = inputStart.setMinutes(inputStart.getMinutes() - calcDuration);

					let end = '';
					let previousEnd = '';
					const newBookings = bookings.map((booking, i) => {
						if (i === 0) {
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const nEnd = new Date(firstStart);
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							previousEnd = booking?.end_time ?? '';
							end = new Date(new_end_time).toISOString();
							return {
								booking_id: booking.booking_id,
								start_time: new Date(firstStart).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						} else {
							const durationBetween = durationInMinutes(previousEnd, booking?.start_time ?? undefined);
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const nStart = new Date(end);
							const new_start_time = nStart.setMinutes(nStart.getMinutes() + durationBetween);
							const nEnd = new Date(new_start_time);
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							previousEnd = booking?.end_time ?? '';
							end = new Date(new_end_time).toISOString();
							return {
								booking_id: booking.booking_id,
								start_time: new Date(new_start_time).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						}
					});
					const updatedBookings = await Promise.all(
						newBookings.map(async (el) => {
							const booking = await BookingDao.updateBookingStart(
								el as UpdateBookingRequest,
								el.booking_id,
								user_id
							);
							return booking;
						})
					);
					res.status(200).json({ updatedBookings });
				} else {
					// if this is not the first booking in the group and you set to no time gaps when moving
					let end = '';
					const calcDuration = bookings
						.slice(0, findBookingIndex)
						.reduce(
							(total, b) =>
								total + durationInMinutes(b?.start_time ?? undefined, b.end_time ?? undefined),
							0
						);
					const inputStart = new Date(start_time);
					const firstStart = inputStart.setMinutes(inputStart.getMinutes() - calcDuration);
					const newBookings = bookings.map((booking, i) => {
						if (i === 0) {
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const nEnd = new Date(firstStart);
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							end = new Date(new_end_time).toISOString();
							return {
								booking_id: booking.booking_id,
								start_time: new Date(firstStart).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						} else {
							const duration = durationInMinutes(
								booking?.start_time ?? undefined,
								booking?.end_time ?? undefined
							);
							const new_start_time = new Date(end);
							const nEnd = new Date(end);
							const new_end_time = nEnd.setMinutes(nEnd.getMinutes() + duration);
							end = new Date(new_end_time).toISOString();
							return {
								booking_id: booking.booking_id,
								start_time: new Date(new_start_time).toISOString(),
								end_time: new Date(new_end_time).toISOString(),
							};
						}
					});
					const updatedBookings = await Promise.all(
						newBookings.map(async (el) => {
							const booking = await BookingDao.updateBookingStart(
								el as UpdateBookingRequest,
								el.booking_id,
								user_id
							);
							return booking;
						})
					);
					res.status(200).json({ updatedBookings });
				}
			} else res.status(200).json('ok');
		} else {
			res.status(400).json({ message: 'User is not an employee of the reservation module' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking start and end', error });
	}
}

/**
 * PUT /reservation/reservations/bookings/update-booking-start-first-group-admin/:booking_id
 * @tag Reservation
 * @summary Update booking start time for the first booking in a group and parent of the group
 * @operationId updateBookingStartFirstInGroupAdmin
 * @pathParam {string} booking_id
 * @bodyContent {UpdateBookingRequest} application/json
 * @response 200 - Booking updated
 * @responseContent {BookingResponse} 200.application/json
 * @response 500 - Error updating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBookingStartFirstInGroupAdmin(
	req: ValidatedRequest<UpdateBookingRequest, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
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
			isEmployeeOfModule = reservation_module.employees.some(
				(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
			);
		}
		if (isEmployeeOfModule) {
			const bookingsData = await BookingDao.getBookingByIdWithChildren(req.params.booking_id);
			const booking = await BookingDao.updateBookingStart(req.body, req.params.booking_id, user_id);
			const children = bookingsData?.child_bookings ?? [];
			if (children.length > 0) {
				const [firstBooking, ...restBookings] = children;
				const firstBookingData = await BookingDao.updateBookingStart(
					{ parent_booking_id: firstBooking?.parent_booking_id as string } as UpdateBookingRequest,
					firstBooking?.booking_id as string,
					user_id
				);
				const updatedBookings = await Promise.all(
					restBookings.map(async (el) => {
						const booking = await BookingDao.updateBookingParent(
							{ parent_booking_id: firstBooking?.booking_id as string } as UpdateBookingRequest,
							el.booking_id,
							user_id
						);
						return booking;
					})
				);
				res.status(200).json({ booking, firstBookingData, updatedBookings });
			} else {
				res.status(200).json(booking);
			}
		} else {
			res.status(400).json({ message: 'User is not an employee of the reservation module' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking start and end', error });
	}
}

/**
 * POST /reservation/reservations/bookings/update-bookings-admin
 * @tag Reservation
 * @summary Update multiple bookings
 * @operationId updateBookingGroupAdmin
 * @bodyContent {UpdateMultipleBookingsRequest} application/json
 * @response 201 - Bookings updated
 * @responseContent {UpdateBookingGroupResponse} 201.application/json
 * @response 500 - Error updating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBookingGroupAdmin(
	req: ValidatedRequest<UpdateMultipleBookingsRequest>,
	res: Response
): Promise<void> {
	const { bookings, customer, deletedBookings } = req.body;
	const reservation_module_id = req.user?.reservation_module_id;
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
		isEmployeeOfModule = reservation_module.employees.some(
			(e: EmployeeDAOResponse) => e.business_user?.user_id === user_id
		);
	}
	// map to DAO’s single-service input
	if (isEmployeeOfModule) {
		const customerInput = {
			...customer,
			customer_id: customer?.customer_id ?? null,
		};
		const inputs = bookings.map((booking) => ({
			...booking,
			...customerInput,
			reservation_module_id,
			// parent_booking_id set inside DAO for children
		})) as UpdateBookingRequest[];
		const splittedInputs = splitConsecutiveSlots(inputs);

		try {
			const result = await Promise.all(
				splittedInputs.map(async (el) => {
					const all = await BookingDao.updateBookingGroup(el, {
						validateSchedule: !isEmployeeOfModule, // <- only enforce schedules for externals
						ignoreBooking: true,
					});
					return {
						parent: all[0],
						children: all.slice(1),
						all,
					};
				})
			);
			const deleted = await Promise.all(
				deletedBookings.map(async (el) => {
					const all = await BookingDao.updateStatusDelete(el?.booking_id as string, user_id);
					return all;
				})
			);
			res.status(201).json({ result, deleted });
		} catch (error) {
			console.error('Error creating booking group:', error);
			res.status(500).json({
				message: error instanceof Error ? error.message : 'Error creating booking group',
				error,
			});
		}
	} else {
		res.status(400).json({ message: 'User is not an employee of the reservation module' });
	}
}

/**
 * Calcs bookings analytics
 * @param {Booking[]} bookings - The list of bookings to analyze.
 * @param {string} start_date - The start date to consider for new customers
 * @returns { noShows: number; cancels: number; totalPrice: number; newCustomers: number } - The analytics data.
 * @description Calculates the number of no-shows, cancellations, total price, and new customers from a list of bookings.
 */

export function calcBookings(bookings: BookingForAnalyticsDAOResponse[], start_date: string) {
	const start = moment(start_date);
	const newCustomers = new Set<string>();

	let newCustomersBookings = 0;
	let noShows = 0;
	let cancels = 0;
	let totalPrice = 0;

	for (const booking of bookings) {
		// Count statuses
		if (booking.status === 'no_show') noShows++;
		if (booking.status === 'cancelled') cancels++;

		// Sum price
		const price = booking.price_cents || 0;
		const discount = booking.discount_percent
			? ((booking.discount_percent || 100) / 100) * price
			: booking.discount_amount || 0;
		const sum = price - discount;
		totalPrice += sum;

		// Track new customers
		if (booking?.customer && moment(booking.customer.created_at).isSameOrAfter(start)) {
			newCustomers.add(booking.customer?.customer_id);
			newCustomersBookings++;
		}
	}

	return {
		noShows,
		cancels,
		totalPrice,
		newCustomers: newCustomers.size,
		newCustomersBookings,
	};
}

interface DailyStats {
	date: string;
	endDate: string;
	bookingsCount: number;
	totalPrice: number;
}

/**
 * Sorts and aggregates booking stats
 * @param {Booking[]} bookings - The list of bookings to sort and aggregate.
 * @param {string} startDate - The start date of the range (ISO string).
 * @param {string} endDate - The end date of the range (ISO string).
 * @param {string} type - The type of aggregation ('day', 'month').
 * @returns {DailyStats[]} - The aggregated daily stats.
 * @description Sorts bookings into daily stats within a date range, aggregating counts and total prices.
 */

export function sortBookingStats(
	bookings: BookingForAnalyticsDAOResponse[],
	startDate: string,
	endDate: string,
	type: string
): DailyStats[] {
	const start: Moment = moment(startDate);
	const end: Moment = moment(endDate);
	const days: DailyStats[] = [];

	// initialize all days in range
	for (
		let m = start;
		m.isBefore(end);
		type === 'month'
			? m.add(1, type as unitOfTime.DurationAs).endOf('month')
			: m.add(1, type as unitOfTime.DurationAs)
	) {
		const end =
			type === 'month'
				? moment(m)
						.add(1, type as unitOfTime.DurationAs)
						.endOf('month')
				: moment(m).add(1, type as unitOfTime.DurationAs);
		days.push({
			date: m.toISOString(), // ISO string at midnight UTC
			endDate: end.toISOString(),
			bookingsCount: 0,
			totalPrice: 0,
		});
	}

	// aggregate bookings
	bookings.forEach((b) => {
		const bookingDay = moment(b.start_time);

		const entry = days.find((d) => moment(d.date).isBefore(bookingDay) && moment(d.endDate).isAfter(bookingDay));
		if (entry) {
			entry.bookingsCount += 1;
			const price = b.price_cents || 0;
			const discount = b.discount_percent ? ((b.discount_percent || 100) / 100) * price : b.discount_amount || 0;
			const sum = Math.round(price - discount) / 100;
			entry.totalPrice += sum;
		}
	});

	return days;
}

/**
 * POST /reservation/reservations/bookings/analytics
 * @tag Reservation
 * @summary Get analytics for bookings
 * @operationId listBookingsAnalytics
 * @bodyContent {BookingsAnalyticsParams} application/json
 * @response 200 - Analytics retrieved
 * @responseContent {BookingsAnalyticsResponse} 200.application/json
 * @response 500 - Error retrieving analytics
 * @prisma_model booking
 * @prisma_model customers
 */
export async function getBookingsAnalytics(
	req: ValidatedRequest<BookingsAnalyticsParams>,
	res: Response
): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id || null;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}

		const params: ListBookingsParams = {
			...req.body,
			status: ['reserved', 'cancelled', 'no_show'],
			reservation_module_id: reservationModuleId,
		};
		const bookings = await BookingDao.getBookingsForAnalytics(params);
		const paramsPrev: ListBookingsParams = {
			...req.body,
			reservation_module_id: reservationModuleId,
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
		const sortedBookings =
			req.body.from && req.body.to
				? sortBookingStats(
						bookings,
						req.body.from?.toISOString(),
						req.body.to?.toISOString(),
						req.body.type === 'year' ? 'month' : 'day'
					)
				: [];
		res.status(200).json({
			//bookings,
			//bookingsPrev,
			cards: { ...data, bookingsCount: bookings.length },
			cardsPrev: { ...dataPrev, bookingsCount: bookingsPrev.length },
			sortedBookings,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving bookings', error });
	}
}

/**
 * POST /reservation/reservations/bookings-courses-res/list
 * @tag Reservation
 * @summary List bookings courses for the current reservation module
 * @operationId listBookingsCoursesByReservationModuleId
 * @bodyContent {ListBookingsParams} application/json
 * @response 200 - Bookings retrieved
 * @responseContent {BookingCoursesByModuleDAOResponse[]} 200.application/json
 * @response 500 - Error retrieving bookings
 * @prisma_model booking
 */
export async function listBookingsCoursesByReservationModuleId(
	req: ValidatedRequest<ListBookingsParams>,
	res: Response
): Promise<void> {
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
		const bookings = await BookingDao.getBookingCoursesByReservationModuleId(params);
		res.status(200).json(bookings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving bookings', error });
	}
}

/**
 * POST /reservation/reservations/bookings-courses/list
 * @tag Reservation
 * @summary List bookings courses for the current reservation module
 * @operationId listBookingsCourses
 * @bodyContent {ListBookingsParams} application/json
 * @response 200 - Bookings retrieved
 * @responseContent {BookingCoursesByModuleDAOResponse[]} 200.application/json
 * @response 500 - Error retrieving bookings
 * @prisma_model booking
 */
export async function listBookingsCourses(req: ValidatedRequest<ListBookingsParams>, res: Response): Promise<void> {
	try {
		const params: ListBookingsParams = { ...req.body };
		const bookings = await BookingDao.getBookingCoursesByReservationModuleId(params);
		res.status(200).json(bookings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving bookings', error });
	}
}

/**
 * GET /reservation/reservations/bookings/:booking_id
 * @tag Reservation
 * @summary Get a booking by ID
 * @operationId getBookingById
 * @pathParam {string} booking_id
 * @response 200 - Booking retrieved
 * @responseContent {BookingCourseDAOResponse} 200.application/json
 * @response 404 - Booking not found
 * @response 500 - Error retrieving booking
 * @prisma_model booking
 */
export async function getBookingCourse(
	req: ValidatedRequest<null, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.getBookingCourseById(req.params.booking_id);
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
 * POST /reservation/reservations/bookings-course
 * @tag Reservation
 * @summary Create a new booking course
 * @operationId createBookingCourse
 * @bodyContent {CreateBookingCourseRequest} application/json
 * @response 201 - Booking created
 * @responseContent {BookingCourseDAOResponse} 201.application/json
 * @response 500 - Error creating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function createBookingCourse(
	req: ValidatedRequest<CreateBookingCourseRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		const bookingInput = {
			...req.body,
			reservation_module_id,
		} as CreateBookingCourseRequest;
		const booking = await BookingDao.createBookingCourse(bookingInput);
		res.status(201).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error creating booking', error });
	}
}

/** PUT /reservation/reservations/bookings-course/:booking_id
 * @tag Reservation
 * @summary Update an existing booking course
 * @operationId updateBookingCourse
 * @pathParam {string} booking_id
 * @bodyContent {UpdateBookingCourseRequest} application/json
 * @response 200 - Booking updated
 * @responseContent {BookingCourseDAOResponse} 200.application/json
 * @response 500 - Error updating booking
 * @prisma_model booking
 * @prisma_model booking_history_log
 */
export async function updateBookingCourse(
	req: ValidatedRequest<UpdateBookingCourseRequest, { booking_id: string }>,
	res: Response
): Promise<void> {
	try {
		const booking = await BookingDao.updateBookingCourse(req.body, req.params.booking_id);
		res.status(200).json(booking);
	} catch (error) {
		res.status(500).json({ message: 'Error updating booking', error });
	}
}

/** POST /reservation/reservations/bookings-course-participant
 * @tag Reservation
 * @summary Create a new course participant booking
 * @operationId newBookingCourseParticipant
 * @bodyContent {CreateBookingCourseParticipantRequest} application/json
 * @response 201 - Course participant created
 * @responseContent {BookingCourseParticipantRef} 201.application/json
 * @response 500 - Error creating course participant
 * @prisma_model booking_course_participant
 */
export async function newBookingCourseParticipant(
	req: ValidatedRequest<CreateBookingCourseParticipantRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		const input = {
			...req.body,
			reservation_module_id,
		} as CreateBookingCourseParticipantRequest;
		const participant = await BookingDao.createBookingCourseParticipant(input);
		res.status(201).json(participant);
	} catch (error) {
		res.status(500).json({ message: 'Error creating course participant', error });
	}
}

/** PUT /reservation/reservations/bookings-course-participant/cancel
 * @tag Reservation
 * @summary Cancel a course participant booking
 * @operationId cancelBookingCourseParticipant
 * @bodyContent {UpdateBookingCourseParticipantRequest} application/json
 * @response 200 - Course participant cancelled
 * @responseContent {BookingCourseParticipantRef} 200.application/json
 * @response 500 - Error cancelling course participant
 * @prisma_model booking_course_participant
 */
export async function cancelBookingCourseParticipant(
	req: ValidatedRequest<UpdateBookingCourseParticipantRequest>,
	res: Response
): Promise<void> {
	try {
		const participant = await BookingDao.cancelBookingCourseParticipant(req.body);
		res.status(200).json(participant);
	} catch (error) {
		res.status(500).json({ message: 'Error cancelling course participant', error });
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
	updateBookingStartAdmin,
	updateBookingStartGroupAdmin,
	updateBookingStartFirstInGroupAdmin,
	updateBookingGroupAdmin,
	getBookingsAnalytics,
	calcBookings,
	listBookingsCoursesByReservationModuleId,
	listBookingsCourses,
	getBookingCourse,
	createBookingCourse,
	updateBookingCourse,
	newBookingCourseParticipant,
	cancelBookingCourseParticipant,
};
