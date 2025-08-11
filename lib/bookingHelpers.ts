import moment from 'moment';

import prisma from '../prisma/prisma';
import type { Location } from '../types/reservation/Location';
import type { Employee } from '../types/reservation/Employee';
import { Service } from '../types/reservation/Service';
import { BookingSlot, ScheduleSlotException } from '../types/reservation/Schedule';
import { Booking } from '../types/reservation/Booking';
const SLOT_INTERVAL_MINUTES = 30;

interface FindSlotsInput {
	reservationModuleId: string;
	date: Date;
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

	// --- Validation ---
	const services = await prisma.service.findMany({
		where: {
			reservation_module_id: reservationModuleId,
			service_id: { in: serviceIds },
		},
		select: { duration_minutes: true, service_id: true },
	});
	if (services.length !== serviceIds.length) {
		throw new Error('One or more services do not belong to this reservation module');
	}

	if (employeeId) {
		const employeeExists = await prisma.employee.findFirst({
			where: { reservation_module_id: reservationModuleId, employee_id: employeeId },
			select: { employee_id: true },
		});
		if (!employeeExists) throw new Error('Employee does not belong to this reservation module');
	}

	if (locationId) {
		const locationExists = await prisma.location.findFirst({
			where: { reservation_module_id: reservationModuleId, location_id: locationId },
			select: { location_id: true },
		});
		if (!locationExists) throw new Error('Location does not belong to this reservation module');
	}

	// --- Total duration ---
	const totalDurationMinutes = services.reduce((sum: number, s: Service) => sum + s.duration_minutes, 0);
	const startOfDay = moment(date).startOf('day').toDate();
	const endOfDay = moment(date).endOf('day').toDate();
	console.log(
		`Searching slots for ${moment(startOfDay).format('YYYY-MM-DD')} with total duration ${totalDurationMinutes} minutes`
	);
	// --- Fetch schedule slots ---
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
	console.log(`Found ${scheduleSlots.length} schedule slots for the day`);
	// --- Fetch bookings ---
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
	console.log(`Found ${bookings.length} bookings overlapping with the day`);
	const results: {
		start: Date;
		end: Date;
		schedule_slot_id: string;
		location: Location;
		employee: Employee;
	}[] = [];

	// --- Slot search ---
	for (const slot of scheduleSlots) {
		const slotStart = moment(slot.start_time);
		const slotEnd = moment(slot.end_time);
		const allowedStarts = slot.booking_slots.map((bs: BookingSlot) => moment(bs.start_time).format('HH:mm'));

		let current = slotStart.clone();
		while (current.clone().add(totalDurationMinutes, 'minute').isSameOrBefore(slotEnd)) {
			const end = current.clone().add(totalDurationMinutes, 'minute');

			// Must match booking slot start
			if (!allowedStarts.includes(current.format('HH:mm'))) {
				current.add(SLOT_INTERVAL_MINUTES, 'minute');
				continue;
			}

			// No exceptions
			if (
				slot.schedule_slot_exceptions.some((ex: ScheduleSlotException) => {
					const exStart = moment(ex.start_time);
					const exEnd = moment(ex.end_time);
					return current.isBefore(exEnd) && end.isAfter(exStart);
				})
			) {
				current.add(SLOT_INTERVAL_MINUTES, 'minute');
				continue;
			}

			// No booking overlaps
			if (
				bookings.some((b: Booking) => {
					const bStart = moment(b.start_time);
					const bEnd = moment(b.end_time);
					return current.isBefore(bEnd) && end.isAfter(bStart);
				})
			) {
				current.add(SLOT_INTERVAL_MINUTES, 'minute');
				continue;
			}

			const slotData = {
				start: current.toDate(),
				end: end.toDate(),
				schedule_slot_id: slot.schedule_slot_id,
				location: slot.schedule.location,
				employee: slot.employee,
			};

			if (returnFirst) {
				return slotData; // stop early
			}

			results.push(slotData);
			current.add(SLOT_INTERVAL_MINUTES, 'minute');
		}
	}

	return returnFirst ? null : results;
}
