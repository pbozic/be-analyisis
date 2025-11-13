import { Prisma } from '@prisma/client';

export const bookingCourseTimeBase = Prisma.validator<Prisma.booking_course_timeInclude>()({
	booking: true,
	reservation_module: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type BookingCourseTimeBasePrisma = Prisma.booking_course_timeGetPayload<{
	include: typeof bookingCourseTimeBase;
}>;
