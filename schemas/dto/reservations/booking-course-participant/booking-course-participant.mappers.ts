import type { BookingCourseParticipantResponse } from './booking-course-participant.dto';
import { BookingCourseParticipantResponseSchema } from './booking-course-participant.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma booking_course_participant to BookingCourseParticipantResponse
 */
export function toBookingCourseParticipantResponse(row: any): BookingCourseParticipantResponse {
	const r = row;

	const dto = {
		booking_course_participant_id: r.booking_course_participant_id,
		booking_id: r.booking_id,
		participant_name: r.participant_name,
		participant_email: r.participant_email ?? null,
		participant_phone: r.participant_phone ?? null,
		notes: r.notes ?? null,
		created_at: toIso(r.created_at) ?? '',
		booking: r.booking ?? undefined,
	};

	return BookingCourseParticipantResponseSchema.parse(dto);
}

/**
 * Map list of booking course participants
 */
export function toBookingCourseParticipantList(rows: any[]): BookingCourseParticipantResponse[] {
	return rows.map(toBookingCourseParticipantResponse);
}

export default {
	toBookingCourseParticipantResponse,
	toBookingCourseParticipantList,
};
