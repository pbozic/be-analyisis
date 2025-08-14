import moment from 'moment';
import { Prisma, BOOKING_STATUS } from '@prisma/client';

import prisma from '../prisma/prisma';
import type { Location } from '../types/reservation/Location';
import type { Employee } from '../types/reservation/Employee';
import { Service } from '../types/reservation/Service';
import {
	BookingSlot,
	ScheduleSlotException,
	BookingSlotWithoutId,
	BookingSlotWithId,
	ExceptionWithoutId,
	ExceptionWithId,
} from '../types/reservation/Schedule';
import { Booking } from '../types/reservation/Booking';

const SLOT_INTERVAL_MINUTES = 30;
const CAN_END_OUT_OF_BOOKING_SLOT = true;
const MAX_LOOKAHEAD_DAYS = 60; // how far to search when returnFirst=true

interface FindSlotsInput {
	reservationModuleId: string;
	date: Date; // starting date (used as a seed when returnFirst=true)
	serviceIds: string[];
	employeeId?: string;
	locationId?: string;
	returnFirst?: boolean;
}

export async function findSlots({
	reservationModuleId,
	date,
	serviceIds,
	employeeId,
	locationId,
	returnFirst = false,
}: FindSlotsInput) {
	if (serviceIds.length === 0) throw new Error('No services provided');

	// --- Validate ownership ---
	const services = await prisma.service.findMany({
		where: { reservation_module_id: reservationModuleId, service_id: { in: serviceIds } },
		select: { duration_minutes: true, service_id: true },
	});
	if (services.length !== serviceIds.length)
		throw new Error('One or more services do not belong to this reservation module');

	if (employeeId) {
		const ok = await prisma.employee.findFirst({
			where: { reservation_module_id: reservationModuleId, employee_id: employeeId },
			select: { employee_id: true },
		});
		if (!ok) throw new Error('Employee does not belong to this reservation module');
	}
	if (locationId) {
		const ok = await prisma.location.findFirst({
			where: { reservation_module_id: reservationModuleId, location_id: locationId },
			select: { location_id: true },
		});
		if (!ok) throw new Error('Location does not belong to this reservation module');
	}

	const totalDurationMinutes = services.reduce((sum: number, s: Service) => sum + s.duration_minutes, 0);

	type SlotResult = {
		start: Date;
		end: Date;
		schedule_slot_id: string;
		location: Location;
		employee: Employee;
	};

	// --- Process a single day; if returnFirstDay=true, stop on first valid slot for that day
	const processDay = async (
		day: moment.Moment,
		returnFirstDay: boolean
	): Promise<SlotResult[] | SlotResult | null> => {
		const startOfDay = day.clone().startOf('day').toDate();
		const endOfDay = day.clone().endOf('day').toDate();

		const scheduleSlots = await prisma.schedule_slot.findMany({
			where: {
				date: { gte: startOfDay, lte: endOfDay },
				...(employeeId && { employee_id: employeeId }),
				schedule: {
					...(locationId && { location_id: locationId }),
					location: { reservation_module_id: reservationModuleId },
				},
			},
			include: {
				schedule_slot_exceptions: true,
				booking_slots: true,
				schedule: { include: { location: true } },
				employee: true,
			},
			orderBy: { start_time: 'asc' },
		});

		const bookings = await prisma.booking.findMany({
			where: {
				reservation_module_id: reservationModuleId,
				start_time: { lt: endOfDay },
				end_time: { gt: startOfDay },
				status: { notIn: ['cancelled', 'no_show'] },
				...(employeeId && { employee_id: employeeId }),
				...(locationId && { location_id: locationId }),
			},
			select: { start_time: true, end_time: true },
		});

		const dayResults: SlotResult[] = [];

		for (const slot of scheduleSlots) {
			const slotStart = moment(slot.start_time);
			const slotEnd = moment(slot.end_time);

			// Build booking ranges, clamped to schedule slot just in case
			const ranges = (slot.booking_slots as BookingSlot[])
				.map((bs) => {
					const bsStart = moment.max(moment(bs.start_time), slotStart);
					const bsEnd = moment.min(moment(bs.end_time), slotEnd);
					return { bsStart, bsEnd };
				})
				.filter((r) => r.bsStart.isBefore(r.bsEnd))
				.sort((a, b) => a.bsStart.valueOf() - b.bsStart.valueOf());

			for (const { bsStart, bsEnd } of ranges) {
				// align current to the SLOT_INTERVAL_MINUTES grid
				const minutesFromMidnight = bsStart.hours() * 60 + bsStart.minutes();
				const remainder = minutesFromMidnight % SLOT_INTERVAL_MINUTES;
				const alignedStart =
					remainder === 0
						? bsStart.clone()
						: bsStart.clone().add(SLOT_INTERVAL_MINUTES - remainder, 'minute');

				let current = alignedStart;
				while (true) {
					const end = current.clone().add(totalDurationMinutes, 'minute');

					const startInsideRange = current.isBefore(bsEnd); // start < range end
					const endInsideSchedule = end.isSameOrBefore(slotEnd); // must fit inside schedule slot
					const endInsideBooking = CAN_END_OUT_OF_BOOKING_SLOT ? true : end.isSameOrBefore(bsEnd);

					if (!startInsideRange) break; // left booking range
					if (!endInsideSchedule || !endInsideBooking) {
						current.add(SLOT_INTERVAL_MINUTES, 'minute');
						continue;
					}

					// Exceptions: no overlap
					const blockedByException = (slot.schedule_slot_exceptions as ScheduleSlotException[]).some((ex) => {
						const exStart = moment(ex.start_time);
						const exEnd = moment(ex.end_time);
						return current.isBefore(exEnd) && end.isAfter(exStart);
					});
					if (blockedByException) {
						current.add(SLOT_INTERVAL_MINUTES, 'minute');
						continue;
					}

					// Existing bookings: no overlap
					const blockedByBooking = (bookings as Booking[]).some((b) => {
						const bStart = moment(b.start_time);
						const bEnd = moment(b.end_time);
						return current.isBefore(bEnd) && end.isAfter(bStart);
					});
					if (blockedByBooking) {
						current.add(SLOT_INTERVAL_MINUTES, 'minute');
						continue;
					}

					const slotData: SlotResult = {
						start: current.toDate(),
						end: end.toDate(),
						schedule_slot_id: slot.schedule_slot_id,
						location: slot.schedule.location as unknown as Location,
						employee: slot.employee as unknown as Employee,
					};

					if (returnFirstDay) return slotData; // first for this day

					dayResults.push(slotData);
					current.add(SLOT_INTERVAL_MINUTES, 'minute');
				}
			}
		}

		return returnFirstDay ? null : dayResults;
	};

	const seed = moment(date).startOf('day');

	if (returnFirst) {
		// scan forward up to MAX_LOOKAHEAD_DAYS until we find a slot
		for (let d = 0; d <= MAX_LOOKAHEAD_DAYS; d++) {
			const day = seed.clone().add(d, 'day');
			const firstForDay = (await processDay(day, true)) as SlotResult | null;
			if (firstForDay) return firstForDay;
		}
		return null; // nothing found in the lookahead window
	}

	// return all slots for the given date only
	return (await processDay(seed, false)) as SlotResult[];
}

/**
 * Splits booking slots into two arrays: those with a booking ID and those without.
 * @param {BookingSlotWithoutId[]} slots - The array of booking slots to split.
 * @returns {{ withBookingId: BookingSlotWithId[], withoutBookingId: BookingSlotWithoutId[] }}
 * @description This function iterates through the provided booking slots and separates them into two categories:
 * - `withBookingId`: Contains booking slots that have a `booking_slot_id`.
 * - `withoutBookingId`: Contains booking slots that do not have a `booking_slot_id
 * @returns {Object} An object containing two arrays:
 * @throws {Error} If the input is not an array or if any slot does not match the expected structure.
 */
export function splitByBookingId(slots: BookingSlotWithoutId[]) {
	try {
		const withBookingId: BookingSlotWithId[] = [];
		const withoutBookingId: BookingSlotWithoutId[] = [];

		for (const slot of slots) {
			if (slot?.booking_slot_id) {
				withBookingId.push(slot as BookingSlotWithId);
			} else {
				withoutBookingId.push(slot);
			}
		}

		return { withBookingId, withoutBookingId };
	} catch (error) {
		throw new Error(
			'Error splitting booking slots by booking ID: ' + (error instanceof Error ? error.message : 'Unknown error')
		);
	}
}

/**
 * Splits exceptions into two arrays: those with a exception ID and those without.
 * @param {ExceptionWithoutId[]} slots - The array of exceptions to split.
 * @returns {{ withExceptionId: ExceptionWithId[], withoutExceptionId: ExceptionWithoutId[] }}
 * @description This function takes an array of exceptions and splits it into two arrays:
 * - `withExceptionId`: Contains exceptions that have a `schedule_slot_exception_id`.
 * - `withoutExceptionId`: Contains exceptions that do not have a `schedule_slot_exception_id
 * @returns {Object} An object containing two arrays:
 * @throws {Error} If the input is not an array or if any slot does not match the expected structure.
 */
export function splitByExceptionsId(slots: ExceptionWithoutId[]) {
	try {
		const withExceptionId: ExceptionWithId[] = [];
		const withoutExceptionId: ExceptionWithoutId[] = [];

		for (const slot of slots) {
			if (slot?.schedule_slot_exception_id) {
				withExceptionId.push(slot as ExceptionWithId);
			} else {
				withoutExceptionId.push(slot);
			}
		}

		return { withExceptionId, withoutExceptionId };
	} catch (error) {
		throw new Error(
			'Error splitting exceptions by exception ID: ' + (error instanceof Error ? error.message : 'Unknown error')
		);
	}
}

/**
 * Checks if a booking slot is available for the given parameters.
 * This function checks if a booking slot is available based on the provided parameters.
 * It considers the reservation module, start and end times, assigned employee, and location.
 * If no concrete time range is provided, it returns true (available).
 * If the start time is not before the end time, it returns false (invalid window).
 * If no assigned employee or location is provided, it returns true (available).
 * It checks for existing bookings that overlap with the provided time range.
 * @param tx Prisma.TransactionClient - Prisma transaction client to use for the query
 * @param args - Arguments for checking booking slot availability
 * @param args.reservation_module_id - ID of the reservation module
 * @param args.start_time - Start time of the booking slot (Date or ISO string)
 * @param args.end_time - End time of the booking slot (Date or ISO string)
 * @param args
 * @returns
 */
export async function isBookingSlotAvailable(
	tx: Prisma.TransactionClient,
	args: {
		reservation_module_id: string;
		start_time: string | Date | null | undefined;
		end_time: string | Date | null | undefined;
		employee_id?: string | null;
		location_id?: string | null;
	}
): Promise<boolean> {
	const { reservation_module_id, start_time, end_time, employee_id, location_id } = args;

	// If we don't have a concrete time range, nothing to block against.
	if (!start_time || !end_time) return true;

	const st = new Date(start_time);
	const et = new Date(end_time);
	if (!(st < et)) return false; // invalid window => treat as not available

	// We need at least one concrete resource dimension to avoid blocking the entire module
	if (!employee_id && !location_id) return true;

	const where: Prisma.bookingWhereInput = {
		reservation_module_id,
		status: { notIn: [BOOKING_STATUS.cancelled, BOOKING_STATUS.no_show] },
		// Overlap condition: existing.start < new.end && existing.end > new.start
		start_time: { lt: et },
		end_time: { gt: st },
		...(employee_id ? { employee_id } : {}),
		...(location_id ? { location_id } : {}),
	};

	const conflicts = await tx.booking.count({ where });
	return conflicts === 0;
}
/**
 * Checks if an employee is scheduled for a specific time window.
 * This function checks if an employee is scheduled for a given time window within a reservation module.
 * It considers the assigned employee, location, and the start and end times of the window.
 * If no assigned employee or time range is provided, it returns true (no schedule to validate).
 * If the start time is not before the end time, it returns false (invalid window).
 * It checks for schedule slots that match the criteria and ensures there are no exceptions blocking the window.
 * If the employee is scheduled for the window, it returns true; otherwise, it returns false.
 * @param tx Prisma.TransactionClient - Prisma transaction client to use for the query
 * @param args - Arguments for checking employee schedule
 * @returns True if the employee is scheduled for the window, false otherwise
 */
export async function isEmployeeScheduledForWindow(
	tx: Prisma.TransactionClient,
	args: {
		reservation_module_id: string;
		employee_id?: string | null;
		location_id?: string | null;
		start_time?: string | Date | null;
		end_time?: string | Date | null;
	}
): Promise<boolean> {
	const { reservation_module_id, employee_id, location_id, start_time, end_time } = args;
	if (!employee_id || !start_time || !end_time) return true; // nothing to validate

	const st = new Date(start_time);
	const et = new Date(end_time);
	if (!(st < et)) return false;

	// Fetch candidate schedule slots that *overlap* the requested window
	// (we’ll enforce full containment below).
	const slots = await tx.schedule_slot.findMany({
		where: {
			employee_id,
			// overlap: slot.start < req.end AND slot.end > req.start
			start_time: { lt: et },
			end_time: { gt: st },
			schedule: {
				...(location_id ? { location_id } : {}),
				location: { reservation_module_id },
			},
		},
		include: {
			schedule_slot_exceptions: true,
			booking_slots: true,
		},
		orderBy: { start_time: 'asc' },
	});
	console.log('Found schedule slots:', slots.length);
	if (slots.length === 0) return false;

	for (const slot of slots) {
		const sst = new Date(slot.start_time);
		const set = new Date(slot.end_time);

		// Require the request window to be fully inside a single schedule slot
		const insideSchedule = st >= sst && et <= set;
		if (!insideSchedule) continue;

		// Exceptions: any overlap blocks
		const blockedByException = slot.schedule_slot_exceptions.some((ex: ScheduleSlotException) => {
			const xst = new Date(ex.start_time);
			const xet = new Date(ex.end_time);
			return st < xet && et > xst;
		});
		console.log('Blocked by exception:', blockedByException);
		if (blockedByException) continue;

		// Booking windows: if none defined, allow whole slot;
		// otherwise require containment in at least one booking window.
		if (!slot.booking_slots || slot.booking_slots.length === 0) return true;

		const insideBookingWindow = slot.booking_slots.some((bs: BookingSlot) => {
			const bst = new Date(bs.start_time);
			const bet = new Date(bs.end_time);
			return st >= bst && et <= bet;
		});
		console.log('Inside booking window:', insideBookingWindow);

		if (insideBookingWindow) return true;
	}

	return false;
}
