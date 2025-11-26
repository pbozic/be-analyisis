import type { ScheduleDAOResponse } from './schedule.dto';
import { ScheduleDAOResponseSchema } from './schedule.dto';
import type { ScheduleBasePrisma, ScheduleWithSlotsPrisma } from '../../../../prisma/includes/reservation/schedule';
import type { BookingSlotRef } from '../booking-slot/booking-slot.dto';
import type { ScheduleSlotExceptionBase } from '../schedule-slot-exception/schedule-slot-exception.dto';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map ScheduleBasePrisma (schedule + location) to ScheduleDAOResponse
 */
export function toScheduleDAOResponse(row: ScheduleBasePrisma): ScheduleDAOResponse {
	const r = row;

	const dto = {
		schedule_id: r.schedule_id,
		location_id: r.location_id,
		name: r.name,
		color: r.color ?? null,
		start_date: toIso(r.start_date),
		end_date: toIso(r.end_date),
		location: r.location ?? undefined,
	};

	return ScheduleDAOResponseSchema.parse(dto);
}

/**
 * Map ScheduleWithSlotsPrisma - returns schedule with slots and employees
 */
export function toScheduleWithSlots(row: ScheduleWithSlotsPrisma) {
	const r = row;

	const schedule_slots = (r.schedule_slots || []).map((slot) => ({
		schedule_slot_id: slot.schedule_slot_id,
		schedule_id: slot.schedule_id,
		schedule_employee_id: slot.schedule_employee_id,
		employee_id: slot.employee_id,
		date: toIso(slot.date) ?? '',
		start_time: toIso(slot.start_time) ?? '',
		end_time: toIso(slot.end_time) ?? '',
		booking_slots: (slot.booking_slots || []).map(
			(bs): BookingSlotRef => ({
				booking_slot_id: bs.booking_slot_id,
				start_time: toIso(bs.start_time) ?? '',
				end_time: toIso(bs.end_time) ?? '',
			})
		),
		schedule_slot_exceptions: (slot.schedule_slot_exceptions || []).map(
			(ex): ScheduleSlotExceptionBase => ({
				schedule_slot_exception_id: ex.schedule_slot_exception_id,
				schedule_slot_id: ex.schedule_slot_id,
				date: toIso(ex.date) ?? '',
				start_time: toIso(ex.start_time) ?? '',
				end_time: toIso(ex.end_time) ?? '',
				reason: ex.reason ?? null,
				type: ex.type,
			})
		),
	}));

	const schedule_employees = (r.schedule_employees || []).map((se) => ({
		schedule_employee_id: se.schedule_employee_id,
		schedule_id: se.schedule_id,
		employee_id: se.employee_id,
		employee: se.employee ?? null,
	}));

	return {
		schedule_id: r.schedule_id,
		location_id: r.location_id,
		name: r.name,
		color: r.color ?? null,
		start_date: toIso(r.start_date) ?? '',
		end_date: toIso(r.end_date) ?? '',
		location: r.location ?? null,
		schedule_slots,
		schedule_employees,
	};
}

/**
 * Map list of schedules to ScheduleDAOResponse list
 */
export function toScheduleDAOList(rows: ScheduleBasePrisma[]): ScheduleDAOResponse[] {
	return rows.map(toScheduleDAOResponse);
}

export default {
	toScheduleDAOResponse,
	toScheduleWithSlots,
	toScheduleDAOList,
};
