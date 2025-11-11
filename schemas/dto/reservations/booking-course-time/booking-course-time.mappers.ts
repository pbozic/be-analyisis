import type { BookingCourseTimeResponse } from './booking-course-time.dto';
import { BookingCourseTimeResponseSchema } from './booking-course-time.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma booking_course_time to BookingCourseTimeResponse
 */
export function toBookingCourseTimeResponse(row: any): BookingCourseTimeResponse {
	const r = row;

	const dto = {
		booking_course_time_id: r.booking_course_time_id,
		booking_id: r.booking_id,
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		status: r.status ?? 'scheduled',
		notes: r.notes ?? null,
		created_at: toIso(r.created_at) ?? '',
		booking: r.booking ?? undefined,
	};

	return BookingCourseTimeResponseSchema.parse(dto);
}

/**
 * Map list of booking course times
 */
export function toBookingCourseTimeList(rows: any[]): BookingCourseTimeResponse[] {
	return rows.map(toBookingCourseTimeResponse);
}

export default {
	toBookingCourseTimeResponse,
	toBookingCourseTimeList,
};
