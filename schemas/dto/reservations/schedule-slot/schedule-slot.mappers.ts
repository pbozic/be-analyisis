import type { ScheduleSlotDAOResponse } from './schedule-slot.dto';
import { ScheduleSlotDAOResponseSchema } from './schedule-slot.dto';
import type {
	ScheduleSlotBasePrisma,
	ScheduleSlotWithBookingsPrisma,
} from '../../../../prisma/includes/reservation/schedule-slot';
import type { BookingSlotRef } from '../booking-slot/booking-slot.dto';
import type { ScheduleSlotExceptionBase } from '../schedule-slot-exception/schedule-slot-exception.dto';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map ScheduleSlotBasePrisma (schedule_slot + employee + schedule) to ScheduleSlotDAOResponse
 */
export function toScheduleSlotDAOResponse(row: ScheduleSlotBasePrisma): ScheduleSlotDAOResponse {
	const r = row;

	const dto = {
		schedule_slot_id: r.schedule_slot_id,
		schedule_id: r.schedule_id,
		schedule_employee_id: r.schedule_employee_id,
		employee_id: r.employee_id,
		date: toIso(r.date),
		start_time: toIso(r.start_time),
		end_time: toIso(r.end_time),
	};

	return ScheduleSlotDAOResponseSchema.parse(dto);
}

/**
 * Map ScheduleSlotWithBookingsPrisma - returns schedule slot with bookings and exceptions
 */
export function toScheduleSlotWithBookings(row: ScheduleSlotWithBookingsPrisma) {
	const r = row;

	const booking_slots = (r.booking_slots || []).map(
		(bs): BookingSlotRef => ({
			booking_slot_id: bs.booking_slot_id,
			start_time: toIso(bs.start_time) ?? '',
			end_time: toIso(bs.end_time) ?? '',
		})
	);

	const schedule_slot_exceptions = (r.schedule_slot_exceptions || []).map(
		(ex): ScheduleSlotExceptionBase => ({
			schedule_slot_exception_id: ex.schedule_slot_exception_id,
			schedule_slot_id: ex.schedule_slot_id,
			date: toIso(ex.date) ?? '',
			start_time: toIso(ex.start_time) ?? '',
			end_time: toIso(ex.end_time) ?? '',
			reason: ex.reason ?? null,
			type: ex.type,
		})
	);

	return {
		schedule_slot_id: r.schedule_slot_id,
		schedule_id: r.schedule_id,
		schedule_employee_id: r.schedule_employee_id,
		employee_id: r.employee_id,
		date: toIso(r.date) ?? '',
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		employee: r.employee ?? null,
		schedule: r.schedule ?? null,
		schedule_employee: r.schedule_employee ?? null,
		booking_slots,
		schedule_slot_exceptions,
	};
}

/**
 * Map list of schedule slots to ScheduleSlotDAOResponse list
 */
export function toScheduleSlotDAOList(rows: ScheduleSlotBasePrisma[]): ScheduleSlotDAOResponse[] {
	return rows.map(toScheduleSlotDAOResponse);
}

export default {
	toScheduleSlotDAOResponse,
	toScheduleSlotWithBookings,
	toScheduleSlotDAOList,
};
