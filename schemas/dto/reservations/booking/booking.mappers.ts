import type {
	BookingDAOResponse,
	BookingCourseDAOResponse,
	BookingForAnalyticsDAOResponse,
	BookingCoursesDAOResponse,
	BookingBasePrismaResult,
} from './booking.dto';
import {
	BookingDAOResponseSchema,
	BookingCourseDAOResponseSchema,
	BookingForAnalyticsDAOResponseSchema,
	BookingCoursesDAOResponseSchema,
} from './booking.dto';
import type {
	BookingBasePrisma,
	BookingWithHistoryPrisma,
	BookingWithCourseDetailsPrisma,
	BookingCoursesSimplePrisma,
} from '../../../../prisma/includes/reservation/booking';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

// Helper to map customer relation (CustomerDetailSchema - without reservation_module_id)
function mapCustomerDetail(customer: BookingBasePrisma['customer']) {
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
function mapLocationRef(location: BookingBasePrisma['location']) {
	return location
		? {
				location_id: location.location_id,
				name: location.name,
				phone: location.phone ?? null,
				color: location.color ?? null,
			}
		: undefined;
}

// Helper to map employee relation (EmployeeLightSchema)
// Uses the lightweight BusinessUserLightSchema since the Prisma include (employeeBase)
// only has a limited select of business_user fields with nested users
function mapEmployeeDetail(employee: BookingBasePrisma['employee']) {
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
							users: employee.business_user.users
								? {
										user_id: employee.business_user.users.user_id,
										email: employee.business_user.users.email ?? null,
										first_name: employee.business_user.users.first_name ?? null,
										last_name: employee.business_user.users.last_name ?? null,
									}
								: undefined,
						}
					: undefined,
			}
		: undefined;
}

// Helper to map service relation (ServiceRefSchema)
function mapServiceRef(service: BookingBasePrisma['service']) {
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
function mapBookingHistoryLogRef(log: BookingWithHistoryPrisma['booking_history_log'][number]) {
	return {
		booking_history_id: log.booking_history_id,
		status: log.status,
		created_at: toIso(log.created_at) ?? '',
	};
}

// Helper to map booking course time (BookingCourseTimeRefSchema)
function mapBookingCourseTimeRef(time: BookingWithCourseDetailsPrisma['booking_course_time'][number]) {
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
function mapBookingCourseParticipantWithCustomer(
	participant: BookingWithCourseDetailsPrisma['booking_course_participant'][number]
) {
	return {
		booking_course_participant_id: participant.booking_course_participant_id,
		customer_id: participant.customer_id,
		status: participant.status,
		customer: mapCustomerDetail(participant.customer),
	};
}

/**
 * Map Prisma booking to BookingDAOResponse (base fields only, no includes)
 * Use this when the booking was created/updated without includes
 */
export function toBookingDAOResponseBase(row: BookingBasePrismaResult): BookingDAOResponse {
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
	};

	return BookingDAOResponseSchema.parse(dto);
}

/**
 * Map Prisma booking to BookingDAOResponse (with includes)
 */
export function toBookingDAOResponse(row: BookingBasePrisma): BookingDAOResponse {
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
	};

	return BookingDAOResponseSchema.parse(dto);
}

/**
 * Map Prisma booking with history to BookingDAOResponse (for getBookingById with history)
 */
export function toBookingDAOResponseWithHistory(row: BookingWithHistoryPrisma): BookingDAOResponse {
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
 * Map Prisma booking course result to BookingCourseDAOResponse
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
export function toBookingForAnalyticsDAOResponse(row: BookingBasePrisma): BookingForAnalyticsDAOResponse {
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
export function toBookingDAOList(rows: BookingBasePrisma[]): BookingDAOResponse[] {
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
export function toBookingForAnalyticsDAOList(rows: BookingBasePrisma[]): BookingForAnalyticsDAOResponse[] {
	return rows.map(toBookingForAnalyticsDAOResponse);
}

/**
 * Map Prisma booking to BookingCoursesDAOResponse (simple course response without participants)
 * Used by getBookingCourses and getBookingCoursesByReservationModuleId
 */
export function toBookingCoursesDAOResponse(row: BookingCoursesSimplePrisma): BookingCoursesDAOResponse {
	const r = row;

	const dto: BookingCoursesDAOResponse = {
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
		service: mapServiceRef(r.service),
		location: mapLocationRef(r.location),
		employee: mapEmployeeDetail(r.employee),
	};

	return BookingCoursesDAOResponseSchema.parse(dto);
}

/**
 * Map list of bookings to BookingCoursesDAOResponse array
 */
export function toBookingCoursesDAOList(rows: BookingCoursesSimplePrisma[]): BookingCoursesDAOResponse[] {
	return rows.map(toBookingCoursesDAOResponse);
}

export default {
	toBookingDAOResponseBase,
	toBookingDAOResponse,
	toBookingCourseDAOResponse,
	toBookingForAnalyticsDAOResponse,
	toBookingCoursesDAOResponse,
	toBookingDAOList,
	toBookingCourseDAOList,
	toBookingForAnalyticsDAOList,
	toBookingCoursesDAOList,
};
