import type { EmployeeDAOResponse, EmployeeByIdDAOResponse, EmployeeWithSlotsDAOResponse } from './employee.dto';
import {
	EmployeeDAOResponseSchema,
	EmployeeByIdDAOResponseSchema,
	EmployeeWithSlotsDAOResponseSchema,
} from './employee.dto';
import type { EmployeeBasePrisma, EmployeeWithSlotsPrisma } from '../../../../prisma/includes/reservation/employee';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map EmployeeBasePrisma (employee + business_user) to EmployeeDAOResponse
 */
export function toEmployeeDAOResponse(row: EmployeeBasePrisma): EmployeeDAOResponse {
	const r = row;

	const dto = {
		employee_id: r.employee_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name ?? null,
		last_name: r.last_name ?? null,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		telephone_code: r.telephone_code ?? null,
		business_users_id: r.business_users_id ?? null,
		created_at: toIso(r.created_at),
		deleted_at: r.deleted_at ? toIso(r.deleted_at) : null,
		business_user: r.business_user
			? {
					business_users_id: r.business_user.business_users_id,
					business_id: r.business_user.business_id,
					user_id: r.business_user.user_id ?? null,
					users: r.business_user.users
						? {
								user_id: r.business_user.users.user_id,
								email: r.business_user.users.email ?? null,
								first_name: r.business_user.users.first_name ?? null,
								last_name: r.business_user.users.last_name ?? null,
							}
						: null,
				}
			: null,
	};

	return EmployeeDAOResponseSchema.parse(dto);
}

/**
 * Map EmployeeBasePrisma to EmployeeByIdDAOResponse (same as EmployeeDAOResponse for now)
 */
export function toEmployeeByIdDAOResponse(row: EmployeeBasePrisma): EmployeeByIdDAOResponse {
	const r = row;

	const dto = {
		employee_id: r.employee_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name ?? null,
		last_name: r.last_name ?? null,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		telephone_code: r.telephone_code ?? null,
		business_users_id: r.business_users_id ?? null,
		created_at: toIso(r.created_at),
		deleted_at: r.deleted_at ? toIso(r.deleted_at) : null,
		business_user: r.business_user
			? {
					business_users_id: r.business_user.business_users_id,
					business_id: r.business_user.business_id,
					user_id: r.business_user.user_id ?? null,
					users: r.business_user.users
						? {
								user_id: r.business_user.users.user_id,
								email: r.business_user.users.email ?? null,
								first_name: r.business_user.users.first_name ?? null,
								last_name: r.business_user.users.last_name ?? null,
							}
						: null,
				}
			: null,
	};

	return EmployeeByIdDAOResponseSchema.parse(dto);
}

/**
 * Map EmployeeWithSlotsPrisma (employee + business_user + schedule_slots with nested data) to EmployeeWithSlotsDAOResponse
 */
export function toEmployeeWithSlotsDAOResponse(row: EmployeeWithSlotsPrisma): EmployeeWithSlotsDAOResponse {
	const r = row;

	const schedule_slots = (r.schedule_slots || []).map((slot) => ({
		schedule_slot_id: slot.schedule_slot_id,
		schedule_id: slot.schedule_id,
		schedule_employee_id: slot.schedule_employee_id,
		employee_id: slot.employee_id,
		date: toIso(slot.date) ?? '',
		start_time: toIso(slot.start_time) ?? '',
		end_time: toIso(slot.end_time) ?? '',
		booking_slots: (slot.booking_slots || []).map((bs) => ({
			booking_slot_id: bs.booking_slot_id,
			schedule_slot_id: bs.schedule_slot_id,
			start_time: toIso(bs.start_time) ?? '',
			end_time: toIso(bs.end_time) ?? '',
		})),
		schedule_slot_exceptions: (slot.schedule_slot_exceptions || []).map((ex) => ({
			schedule_slot_exception_id: ex.schedule_slot_exception_id,
			schedule_slot_id: ex.schedule_slot_id,
			date: toIso(ex.date) ?? '',
			start_time: toIso(ex.start_time) ?? '',
			end_time: toIso(ex.end_time) ?? '',
			reason: ex.reason ?? null,
			type: ex.type,
		})),
	}));

	const dto = {
		employee_id: r.employee_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name ?? null,
		last_name: r.last_name ?? null,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		telephone_code: r.telephone_code ?? null,
		business_users_id: r.business_users_id ?? null,
		created_at: toIso(r.created_at),
		deleted_at: r.deleted_at ? toIso(r.deleted_at) : null,
		business_user: r.business_user
			? {
					business_users_id: r.business_user.business_users_id,
					business_id: r.business_user.business_id,
					user_id: r.business_user.user_id ?? null,
					users: r.business_user.users
						? {
								user_id: r.business_user.users.user_id,
								email: r.business_user.users.email ?? null,
								first_name: r.business_user.users.first_name ?? null,
								last_name: r.business_user.users.last_name ?? null,
							}
						: null,
				}
			: null,
		schedule_slots,
	};

	return EmployeeWithSlotsDAOResponseSchema.parse(dto);
}

/**
 * Map list of employees to list of EmployeeDAOResponse
 */
export function toEmployeeDAOList(rows: EmployeeBasePrisma[]): EmployeeDAOResponse[] {
	return rows.map(toEmployeeDAOResponse);
}

/**
 * Map list of employees with slots to list of EmployeeWithSlotsDAOResponse
 */
export function toEmployeeWithSlotsList(rows: EmployeeWithSlotsPrisma[]): EmployeeWithSlotsDAOResponse[] {
	return rows.map(toEmployeeWithSlotsDAOResponse);
}

export default {
	toEmployeeDAOResponse,
	toEmployeeByIdDAOResponse,
	toEmployeeWithSlotsDAOResponse,
	toEmployeeDAOList,
	toEmployeeWithSlotsList,
};
