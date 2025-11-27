import type { BookingCourseTimeResponse } from './booking-course-time.dto';
import { BookingCourseTimeResponseSchema } from './booking-course-time.dto';
import type { BookingCourseTimeBasePrisma } from '../../../../prisma/includes/reservation/booking-course-time';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma booking_course_time to BookingCourseTimeResponse
 */
export function toBookingCourseTimeResponse(row: BookingCourseTimeBasePrisma): BookingCourseTimeResponse {
	const r = row;

	const dto = {
		booking_course_time_id: r.booking_course_time_id,
		reservation_module_id: r.reservation_module_id,
		booking_id: r.booking_id,
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
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

	return BookingCourseTimeResponseSchema.parse(dto);
}

/**
 * Map list of booking course times
 */
export function toBookingCourseTimeList(rows: BookingCourseTimeBasePrisma[]): BookingCourseTimeResponse[] {
	return rows.map(toBookingCourseTimeResponse);
}

export default {
	toBookingCourseTimeResponse,
	toBookingCourseTimeList,
};
