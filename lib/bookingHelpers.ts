import moment from 'moment';

import prisma from '../prisma/prisma';
import type { Location } from '../types/reservation/Location';
import type { Employee } from '../types/reservation/Employee';
import { Service } from '../types/reservation/Service';
import { BookingSlot, ScheduleSlotException } from '../types/reservation/Schedule';
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
				...(employeeId && { assigned_employee_id: employeeId }),
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
