import type { LocationDAOResponse, LocationWithSchedulesDAOResponse } from './location.dto';
import { LocationDAOResponseSchema, LocationWithSchedulesDAOResponseSchema } from './location.dto';
import type { LocationBasePrisma, LocationWithSchedulesPrisma } from '../../../../prisma/includes/reservation/location';
import type { BookingSlotRef } from '../booking-slot/booking-slot.dto';
import type { ScheduleSlotExceptionBase } from '../schedule-slot-exception/schedule-slot-exception.dto';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
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
export function toLocationWithSchedules(row: LocationWithSchedulesPrisma): LocationWithSchedulesDAOResponse {
	const r = row;

	const schedules = (r.schedules || []).map((schedule) => ({
		schedule_id: schedule.schedule_id,
		location_id: schedule.location_id,
		name: schedule.name,
		color: schedule.color ?? null,
		start_date: toIso(schedule.start_date) ?? '',
		end_date: toIso(schedule.end_date) ?? '',
		schedule_employees: (schedule.schedule_employees || []).map((se) => ({
			schedule_employee_id: se.schedule_employee_id,
			schedule_id: se.schedule_id,
			employee_id: se.employee_id,
			employee: se.employee
				? {
						employee_id: se.employee.employee_id,
						first_name: se.employee.first_name ?? null,
						last_name: se.employee.last_name ?? null,
						email: se.employee.email ?? null,
						business_users_id: se.employee.business_users_id ?? null,
					}
				: undefined,
		})),
		schedule_slots: (schedule.schedule_slots || []).map((slot) => ({
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
		})),
	}));

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
		address: r.address
			? {
					address_id: r.address.address_id,
					street: r.address.street ?? null,
					city: r.address.city ?? null,
					postal_code: r.address.postal ?? null,
					country: r.address.country ?? null,
				}
			: undefined,
		schedules,
	};

	return LocationWithSchedulesDAOResponseSchema.parse(dto);
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
