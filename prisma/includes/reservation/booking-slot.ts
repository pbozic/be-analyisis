import { Prisma } from '@prisma/client';

export const bookingSlotBase = Prisma.validator<Prisma.booking_slotsInclude>()({
	schedule_slot: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type BookingSlotBasePrisma = Prisma.booking_slotsGetPayload<{
	include: typeof bookingSlotBase;
}>;
