import type { CustomerDAOResponse } from './customer.dto';
import { CustomerDAOResponseSchema } from './customer.dto';
import type { CustomerBasePrisma, CustomerWithBookingsPrisma } from '../../../../prisma/includes/reservation/customer';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map CustomerBasePrisma (customer + user + reservation_module) to CustomerDAOResponse
 */
export function toCustomerDAOResponse(row: CustomerBasePrisma): CustomerDAOResponse {
	const r = row;

	const dto = {
		customer_id: r.customer_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name,
		last_name: r.last_name,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		created_at: toIso(r.created_at),
		updated_at: toIso(r.updated_at),
		code: r.code,
		user_id: r.user_id ?? null,
	};

	return CustomerDAOResponseSchema.parse(dto);
}

/**
 * Map CustomerWithBookingsPrisma - returns customer with bookings (untyped for now)
 */
export function toCustomerWithBookings(row: CustomerWithBookingsPrisma): any {
	const r = row;

	const bookings = (r.bookings || []).map((booking) => ({
		booking_id: booking.booking_id,
		customer_id: booking.customer_id ?? null,
		reservation_module_id: booking.reservation_module_id,
		location_id: booking.location_id ?? null,
		status: booking.status,
		service_id: booking.service_id,
		comment: booking.comment ?? null,
		created_at: toIso(booking.created_at),
		updated_at: toIso(booking.updated_at),
		price_cents: booking.price_cents ?? null,
		start_time: booking.start_time ? toIso(booking.start_time) : null,
		end_time: booking.end_time ? toIso(booking.end_time) : null,
		employee_id: booking.employee_id ?? null,
		service: booking.service ?? null,
		employee: booking.employee ?? null,
	}));

	return {
		customer_id: r.customer_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name,
		last_name: r.last_name,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		created_at: toIso(r.created_at),
		updated_at: toIso(r.updated_at),
		code: r.code,
		user_id: r.user_id ?? null,
		user: r.user ?? null,
		bookings,
	};
}

/**
 * Map list of customers to CustomerDAOResponse list
 */
export function toCustomerDAOList(rows: CustomerBasePrisma[]): CustomerDAOResponse[] {
	return rows.map(toCustomerDAOResponse);
}

export default {
	toCustomerDAOResponse,
	toCustomerWithBookings,
	toCustomerDAOList,
};
