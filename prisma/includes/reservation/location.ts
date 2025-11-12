import { Prisma } from '@prisma/client';

export const locationBase = Prisma.validator<Prisma.locationInclude>()({
	address: true,
	reservation_module: true,
} as const);

export const locationWithSchedules = Prisma.validator<Prisma.locationInclude>()({
	address: true,
	reservation_module: true,
	schedules: {
		include: {
			schedule_employees: {
				include: {
					employee: { include: { business_user: true } },
				},
			},
			schedule_slots: {
				include: {
					booking_slots: true,
					schedule_slot_exceptions: true,
				},
			},
		},
	},
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type LocationBasePrisma = Prisma.locationGetPayload<{
	include: typeof locationBase;
}>;

export type LocationWithSchedulesPrisma = Prisma.locationGetPayload<{
	include: typeof locationWithSchedules;
}>;
