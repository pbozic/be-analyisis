import type { CustomerDAOResponse } from './customer.dto';
import { CustomerDAOResponseSchema } from './customer.dto';
import type { CustomerBasePrisma, CustomerWithBookingsPrisma } from '../../../../prisma/includes/reservation/customer';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
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
 * Map CustomerWithBookingsPrisma - returns customer with bookings
 */
export function toCustomerWithBookings(row: CustomerWithBookingsPrisma): CustomerDAOResponse {
	const r = row;

	const bookings = (r.bookings || []).map((booking) => ({
		booking_id: booking.booking_id,
		status: booking.status,
		customer_id: booking.customer_id ?? null,
		reservation_module_id: booking.reservation_module_id,
		location_id: booking.location_id ?? null,
		service_id: booking.service_id,
		comment: booking.comment ?? null,
		created_at: toIso(booking.created_at) ?? '',
		updated_at: toIso(booking.updated_at) ?? '',
		price_cents: booking.price_cents ?? null,
		discount_percent: booking.discount_percent ?? null,
		discount_amount: booking.discount_amount ?? null,
		start_time: booking.start_time ? (toIso(booking.start_time) ?? null) : null,
		end_time: booking.end_time ? (toIso(booking.end_time) ?? null) : null,
		deleted_at: booking.deleted_at ? (toIso(booking.deleted_at) ?? null) : null,
		employee_id: booking.employee_id ?? null,
		parent_booking_id: booking.parent_booking_id ?? null,
		reviewable_id: booking.reviewable_id ?? null,
		course: booking.course,
		people_allowed: booking.people_allowed ?? null,
		people_booked: booking.people_booked ?? null,
	}));

	const dto = {
		customer_id: r.customer_id,
		reservation_module_id: r.reservation_module_id,
		first_name: r.first_name,
		last_name: r.last_name,
		email: r.email ?? null,
		telephone: r.telephone ?? null,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		code: r.code,
		user_id: r.user_id ?? null,
		bookings,
	};

	return CustomerDAOResponseSchema.parse(dto);
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
