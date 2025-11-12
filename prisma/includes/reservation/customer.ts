import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';

export const customerBase = Prisma.validator<Prisma.customersInclude>()({
	user: true,
	reservation_module: true,
} as const);

export const customerWithBookings = Prisma.validator<Prisma.customersInclude>()({
	user: true,
	reservation_module: true,
	bookings: {
		include: {
			service: true,
			employee: { include: employeeBase },
		},
	},
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type CustomerBasePrisma = Prisma.customersGetPayload<{
	include: typeof customerBase;
}>;

export type CustomerWithBookingsPrisma = Prisma.customersGetPayload<{
	include: typeof customerWithBookings;
}>;
