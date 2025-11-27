import type { BookingCourseParticipantResponse } from './booking-course-participant.dto';
import { BookingCourseParticipantResponseSchema } from './booking-course-participant.dto';
import type { BookingCourseParticipantBasePrisma } from '../../../../prisma/includes/reservation/booking-course-participant';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma booking_course_participant to BookingCourseParticipantResponse
 */
export function toBookingCourseParticipantResponse(
	row: BookingCourseParticipantBasePrisma
): BookingCourseParticipantResponse {
	const r = row;

	const dto = {
		booking_course_participant_id: r.booking_course_participant_id,
		reservation_module_id: r.reservation_module_id,
		status: r.status,
		booking_id: r.booking_id,
		customer_id: r.customer_id,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		customer: r.customer
			? {
					customer_id: r.customer.customer_id,
					first_name: r.customer.first_name,
					last_name: r.customer.last_name,
				}
			: undefined,
		booking: r.booking
			? {
					booking_id: r.booking.booking_id,
					status: r.booking.status,
				}
			: undefined,
		reservation_module: r.reservation_module
			? {
					reservation_module_id: r.reservation_module.reservation_module_id,
					publicly_visible: r.reservation_module.publicly_visible ?? false,
					business_id: r.reservation_module.business_id,
				}
			: undefined,
	};

	return BookingCourseParticipantResponseSchema.parse(dto);
}

/**
 * Map list of booking course participants
 */
export function toBookingCourseParticipantList(
	rows: BookingCourseParticipantBasePrisma[]
): BookingCourseParticipantResponse[] {
	return rows.map(toBookingCourseParticipantResponse);
}

export default {
	toBookingCourseParticipantResponse,
	toBookingCourseParticipantList,
};
