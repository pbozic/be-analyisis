import type { LocationDAOResponse } from './location.dto';
import { LocationDAOResponseSchema } from './location.dto';
import type { LocationBasePrisma, LocationWithSchedulesPrisma } from '../../../../prisma/includes/reservation/location';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map LocationBasePrisma (location + address + reservation_module) to LocationDAOResponse
 */
export function toLocationDAOResponse(row: LocationBasePrisma): LocationDAOResponse {
	const r = row;

	const dto = {
		location_id: r.location_id,
		reservation_module_id: r.reservation_module_id,
		name: r.name,
		address_id: r.address_id ?? null,
		phone: r.phone ?? null,
		color: r.color ?? null,
		accepts_online: r.accepts_online ?? false,
		closed_on_holidays: r.closed_on_holidays ?? false,
		working_days: r.working_days,
		address: r.address ?? null,
	};

	return LocationDAOResponseSchema.parse(dto);
}

/**
 * Map LocationWithSchedulesPrisma - returns location with schedules
 */
export function toLocationWithSchedules(row: LocationWithSchedulesPrisma): any {
	const r = row;

	const schedules = (r.schedules || []).map((schedule) => ({
		schedule_id: schedule.schedule_id,
		location_id: schedule.location_id,
		name: schedule.name,
		color: schedule.color ?? null,
		start_date: toIso(schedule.start_date),
		end_date: toIso(schedule.end_date),
		schedule_employees: (schedule.schedule_employees || []).map((se) => ({
			schedule_employee_id: se.schedule_employee_id,
			schedule_id: se.schedule_id,
			employee_id: se.employee_id,
			employee: se.employee ?? null,
		})),
		schedule_slots: (schedule.schedule_slots || []).map((slot) => ({
			schedule_slot_id: slot.schedule_slot_id,
			schedule_id: slot.schedule_id,
			schedule_employee_id: slot.schedule_employee_id,
			employee_id: slot.employee_id,
			date: toIso(slot.date),
			start_time: toIso(slot.start_time),
			end_time: toIso(slot.end_time),
			booking_slots: slot.booking_slots ?? [],
			schedule_slot_exceptions: slot.schedule_slot_exceptions ?? [],
		})),
	}));

	return {
		location_id: r.location_id,
		reservation_module_id: r.reservation_module_id,
		name: r.name,
		address_id: r.address_id ?? null,
		phone: r.phone ?? null,
		color: r.color ?? null,
		accepts_online: r.accepts_online ?? false,
		closed_on_holidays: r.closed_on_holidays ?? false,
		working_days: r.working_days,
		address: r.address ?? null,
		schedules,
	};
}

/**
 * Map list of locations to LocationDAOResponse list
 */
export function toLocationDAOList(rows: LocationBasePrisma[]): LocationDAOResponse[] {
	return rows.map(toLocationDAOResponse);
}

export default {
	toLocationDAOResponse,
	toLocationWithSchedules,
	toLocationDAOList,
};
