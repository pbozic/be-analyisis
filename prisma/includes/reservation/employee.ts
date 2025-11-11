import { Prisma } from '@prisma/client';

export const employeeBase = Prisma.validator<Prisma.employeeInclude>()({
	business_user: true,
} as const);

export const employeeWithSlots = Prisma.validator<Prisma.employeeInclude>()({
	business_user: true,
	schedule_slots: {
		include: {
			booking_slots: true,
			schedule_slot_exceptions: true,
		},
	},
} as const);

export const employeeWithSchedules = Prisma.validator<Prisma.employeeInclude>()({
	business_user: true,
	schedules: {
		include: {
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

export type EmployeeBasePrisma = Prisma.employeeGetPayload<{
	include: typeof employeeBase;
}>;

export type EmployeeWithSlotsPrisma = Prisma.employeeGetPayload<{
	include: typeof employeeWithSlots;
}>;

export type EmployeeWithSchedulesPrisma = Prisma.employeeGetPayload<{
	include: typeof employeeWithSchedules;
}>;
