import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';

export const scheduleSlotBase = Prisma.validator<Prisma.schedule_slotInclude>()({
	employee: { include: employeeBase },
	schedule: true,
	schedule_employee: true,
} as const);

export const scheduleSlotWithBookings = Prisma.validator<Prisma.schedule_slotInclude>()({
	employee: { include: employeeBase },
	schedule: true,
	schedule_employee: true,
	booking_slots: true,
	schedule_slot_exceptions: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type ScheduleSlotBasePrisma = Prisma.schedule_slotGetPayload<{
	include: typeof scheduleSlotBase;
}>;

export type ScheduleSlotWithBookingsPrisma = Prisma.schedule_slotGetPayload<{
	include: typeof scheduleSlotWithBookings;
}>;
