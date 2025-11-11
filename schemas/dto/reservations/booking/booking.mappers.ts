import type { BookingDAOResponse, BookingCourseDAOResponse, BookingForAnalyticsDAOResponse } from './booking.dto';
import {
	BookingDAOResponseSchema,
	BookingCourseDAOResponseSchema,
	BookingForAnalyticsDAOResponseSchema,
} from './booking.dto';
import type {
	BookingWithHistoryPrisma,
	BookingWithCourseDetailsPrisma,
} from '../../../../prisma/includes/reservation/booking';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

// Helper to map customer relation (CustomerDetailSchema - without reservation_module_id)
function mapCustomerDetail(customer: any) {
	return customer
		? {
				customer_id: customer.customer_id,
				user_id: customer.user_id ?? null,
				first_name: customer.first_name,
				last_name: customer.last_name,
				email: customer.email ?? null,
				telephone: customer.telephone ?? null,
				created_at: toIso(customer.created_at) ?? '',
				updated_at: toIso(customer.updated_at) ?? '',
				code: customer.code,
			}
		: undefined;
}

// Helper to map location relation (LocationRefSchema)
function mapLocationRef(location: any) {
	return location
		? {
				location_id: location.location_id,
				name: location.name,
				phone: location.phone ?? null,
				color: location.color ?? null,
			}
		: undefined;
}

// Helper to map employee relation (EmployeeDetailSchema)
function mapEmployeeDetail(employee: any) {
	return employee
		? {
				employee_id: employee.employee_id,
				reservation_module_id: employee.reservation_module_id,
				first_name: employee.first_name ?? null,
				last_name: employee.last_name ?? null,
				email: employee.email ?? null,
				telephone: employee.telephone ?? null,
				telephone_code: employee.telephone_code ?? null,
				business_users_id: employee.business_users_id ?? null,
				created_at: toIso(employee.created_at) ?? '',
				deleted_at: toIso(employee.deleted_at) ?? null,
				business_user: employee.business_user
					? {
							business_users_id: employee.business_user.business_users_id,
							business_id: employee.business_user.business_id,
							user_id: employee.business_user.user_id,
							company_role: employee.business_user.company_role ?? null,
							online: employee.business_user.online ?? false,
							operating_address_id: employee.business_user.operating_address_id ?? null,
							created_at: toIso(employee.business_user.created_at) ?? '',
							updated_at: toIso(employee.business_user.updated_at) ?? '',
						}
					: undefined,
			}
		: undefined;
}

// Helper to map service relation (ServiceRefSchema)
function mapServiceRef(service: any) {
	return service
		? {
				service_id: service.service_id,
				reservation_module_id: service.reservation_module_id,
				name: service.name,
				description: service.description ?? null,
				duration_minutes: service.duration_minutes,
				price_cents: service.price_cents ?? null,
			}
		: undefined;
}

// Helper to map booking history log (BookingHistoryLogRefSchema)
// Prisma field: booking_history_id, DTO expects: booking_history_id
function mapBookingHistoryLogRef(log: any) {
	return {
		booking_history_id: log.booking_history_id,
		status: log.status,
		created_at: toIso(log.created_at) ?? '',
	};
}

// Helper to map booking course time (BookingCourseTimeRefSchema)
function mapBookingCourseTimeRef(time: any) {
	return {
		booking_course_time_id: time.booking_course_time_id,
		booking_id: time.booking_id,
		start_time: toIso(time.start_time) ?? '',
		end_time: toIso(time.end_time) ?? '',
		status: 'scheduled' as const, // Default value since field doesn't exist in Prisma
		notes: null, // Field doesn't exist in Prisma
		created_at: toIso(time.created_at) ?? '',
	};
}

// Helper to map booking course participant (BookingCourseParticipantRefSchema with customer)
function mapBookingCourseParticipantWithCustomer(participant: any) {
	return {
		booking_course_participant_id: participant.booking_course_participant_id,
		customer_id: participant.customer_id,
		status: participant.status,
		customer: mapCustomerDetail(participant.customer),
	};
}

/**
 * Map Prisma booking to BookingDAOResponse (with history)
 */
export function toBookingDAOResponse(row: BookingWithHistoryPrisma): BookingDAOResponse {
	const r = row;

	const dto: BookingDAOResponse = {
		booking_id: r.booking_id,
		customer_id: r.customer_id ?? null,
		reservation_module_id: r.reservation_module_id,
		location_id: r.location_id ?? null,
		status: r.status,
		service_id: r.service_id,
		comment: r.comment ?? null,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		price_cents: r.price_cents ?? null,
		discount_percent: r.discount_percent ?? null,
		discount_amount: r.discount_amount ?? null,
		start_time: toIso(r.start_time) ?? null,
		end_time: toIso(r.end_time) ?? null,
		deleted_at: toIso(r.deleted_at) ?? null,
		employee_id: r.employee_id ?? null,
		parent_booking_id: r.parent_booking_id ?? null,
		reviewable_id: r.reviewable_id ?? null,
		course: r.course,
		people_allowed: r.people_allowed ?? null,
		people_booked: r.people_booked ?? null,
		customer: mapCustomerDetail(r.customer),
		location: mapLocationRef(r.location),
		employee: mapEmployeeDetail(r.employee),
		service: mapServiceRef(r.service),
		booking_history_log: r.booking_history_log?.map(mapBookingHistoryLogRef),
		history: r.booking_history_log?.map(mapBookingHistoryLogRef),
	};

	return BookingDAOResponseSchema.parse(dto);
}

/**
 * Map Prisma booking to BookingCourseDAOResponse
 * Used by getBookingCourseById
 */
export function toBookingCourseDAOResponse(row: BookingWithCourseDetailsPrisma): BookingCourseDAOResponse {
	const r = row;

	const dto: BookingCourseDAOResponse = {
		booking_id: r.booking_id,
		customer_id: r.customer_id ?? null,
		reservation_module_id: r.reservation_module_id,
		location_id: r.location_id ?? null,
		status: r.status,
		service_id: r.service_id,
		comment: r.comment ?? null,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		price_cents: r.price_cents ?? null,
		discount_percent: r.discount_percent ?? null,
		discount_amount: r.discount_amount ?? null,
		start_time: toIso(r.start_time) ?? null,
		end_time: toIso(r.end_time) ?? null,
		deleted_at: toIso(r.deleted_at) ?? null,
		employee_id: r.employee_id ?? null,
		parent_booking_id: r.parent_booking_id ?? null,
		reviewable_id: r.reviewable_id ?? null,
		course: r.course,
		people_allowed: r.people_allowed ?? null,
		people_booked: r.people_booked ?? null,
		booking_course_time: r.booking_course_time?.map(mapBookingCourseTimeRef),
		booking_course_attendees: r.booking_course_participant?.map(mapBookingCourseParticipantWithCustomer),
		service: mapServiceRef(r.service),
		location: mapLocationRef(r.location),
		employee: mapEmployeeDetail(r.employee),
	};

	return BookingCourseDAOResponseSchema.parse(dto);
}

/**
 * Map Prisma booking to BookingForAnalyticsDAOResponse
 * Used by getBookingsForAnalytics
 */
export function toBookingForAnalyticsDAOResponse(row: any): BookingForAnalyticsDAOResponse {
	const r = row;

	const dto: BookingForAnalyticsDAOResponse = {
		booking_id: r.booking_id,
		customer_id: r.customer_id ?? null,
		reservation_module_id: r.reservation_module_id,
		location_id: r.location_id ?? null,
		status: r.status,
		service_id: r.service_id,
		comment: r.comment ?? null,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		price_cents: r.price_cents ?? null,
		discount_percent: r.discount_percent ?? null,
		discount_amount: r.discount_amount ?? null,
		start_time: toIso(r.start_time) ?? null,
		end_time: toIso(r.end_time) ?? null,
		deleted_at: toIso(r.deleted_at) ?? null,
		employee_id: r.employee_id ?? null,
		parent_booking_id: r.parent_booking_id ?? null,
		reviewable_id: r.reviewable_id ?? null,
		course: r.course,
		people_allowed: r.people_allowed ?? null,
		people_booked: r.people_booked ?? null,
		customer: mapCustomerDetail(r.customer),
	};

	return BookingForAnalyticsDAOResponseSchema.parse(dto);
}

/**
 * Map list of bookings to BookingDAOResponse array
 */
export function toBookingDAOList(rows: BookingWithHistoryPrisma[]): BookingDAOResponse[] {
	return rows.map(toBookingDAOResponse);
}

/**
 * Map list of bookings to BookingCourseDAOResponse array
 */
export function toBookingCourseDAOList(rows: BookingWithCourseDetailsPrisma[]): BookingCourseDAOResponse[] {
	return rows.map(toBookingCourseDAOResponse);
}

/**
 * Map list of bookings to BookingForAnalyticsDAOResponse array
 */
export function toBookingForAnalyticsDAOList(rows: any[]): BookingForAnalyticsDAOResponse[] {
	return rows.map(toBookingForAnalyticsDAOResponse);
}

export default {
	toBookingDAOResponse,
	toBookingCourseDAOResponse,
	toBookingForAnalyticsDAOResponse,
	toBookingDAOList,
	toBookingCourseDAOList,
	toBookingForAnalyticsDAOList,
};
