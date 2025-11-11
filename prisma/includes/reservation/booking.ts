import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';

export const bookingBase = Prisma.validator<Prisma.bookingInclude>()({
	customer: true,
	employee: { include: employeeBase },
	service: true,
	location: true,
} as const);

export const bookingWithHistory = Prisma.validator<Prisma.bookingInclude>()({
	customer: true,
	employee: { include: employeeBase },
	service: true,
	location: true,
	booking_history_log: true,
} as const);

export const bookingWithCourseDetails = Prisma.validator<Prisma.bookingInclude>()({
	customer: true,
	employee: { include: employeeBase },
	service: true,
	location: true,
	booking_course_time: true,
	booking_course_participant: {
		include: {
			customer: true,
		},
	},
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type BookingBasePrisma = Prisma.bookingGetPayload<{
	include: typeof bookingBase;
}>;

export type BookingWithHistoryPrisma = Prisma.bookingGetPayload<{
	include: typeof bookingWithHistory;
}>;

export type BookingWithCourseDetailsPrisma = Prisma.bookingGetPayload<{
	include: typeof bookingWithCourseDetails;
}>;
