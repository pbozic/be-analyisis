import { Prisma } from '@prisma/client';

export const bookingHistoryLogBase = Prisma.validator<Prisma.booking_history_logInclude>()({
	booking: true,
	user: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type BookingHistoryLogBasePrisma = Prisma.booking_history_logGetPayload<{
	include: typeof bookingHistoryLogBase;
}>;
