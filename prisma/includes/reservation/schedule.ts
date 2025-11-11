import { Prisma } from '@prisma/client';

export const scheduleBase = Prisma.validator<Prisma.scheduleInclude>()({
	location: true,
} as const);

export const scheduleWithSlots = Prisma.validator<Prisma.scheduleInclude>()({
	location: true,
	schedule_slots: {
		include: {
			booking_slots: true,
			schedule_slot_exceptions: true,
		},
	},
	schedule_employees: {
		include: {
			employee: true,
		},
	},
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type ScheduleBasePrisma = Prisma.scheduleGetPayload<{
	include: typeof scheduleBase;
}>;

export type ScheduleWithSlotsPrisma = Prisma.scheduleGetPayload<{
	include: typeof scheduleWithSlots;
}>;
