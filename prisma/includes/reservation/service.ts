import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';

export const serviceBase = Prisma.validator<Prisma.serviceInclude>()({
	service_category: true,
	assigned_employees: {
		include: {
			employee: { include: employeeBase },
		},
	},
} as const);

export const serviceWithLocations = Prisma.validator<Prisma.serviceInclude>()({
	service_category: true,
	assigned_employees: {
		include: {
			employee: { include: employeeBase },
		},
	},
	service_locations: {
		include: {
			location: true,
		},
	},
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type ServiceBasePrisma = Prisma.serviceGetPayload<{
	include: typeof serviceBase;
}>;

export type ServiceWithLocationsPrisma = Prisma.serviceGetPayload<{
	include: typeof serviceWithLocations;
}>;
