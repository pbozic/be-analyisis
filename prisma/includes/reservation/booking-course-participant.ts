import { Prisma } from '@prisma/client';

export const bookingCourseParticipantBase = Prisma.validator<Prisma.booking_course_participantInclude>()({
	customer: true,
	booking: true,
	reservation_module: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type BookingCourseParticipantBasePrisma = Prisma.booking_course_participantGetPayload<{
	include: typeof bookingCourseParticipantBase;
}>;
