import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';
import { customerBase } from './customer';

export const reservationModuleBase = Prisma.validator<Prisma.reservation_moduleInclude>()({
	business: true,
	business_details: true,
} as const);

export const reservationModuleFull = Prisma.validator<Prisma.reservation_moduleInclude>()({
	business: true,
	business_details: true,
	locations: {
		include: {
			address: true,
			service_locations: true,
		},
	},
	services: {
		include: {
			service_category: true,
			assigned_employees: {
				include: {
					employee: { include: employeeBase },
				},
			},
		},
	},
	employees: { include: employeeBase },
	bookings: {
		include: {
			customer: true,
			employee: { include: employeeBase },
			service: true,
		},
	},
	customers: { include: customerBase },
	service_categories: true,
} as const);

// ===== PRISMA PAYLOAD TYPES =====

export type ReservationModuleBasePrisma = Prisma.reservation_moduleGetPayload<{
	include: typeof reservationModuleBase;
}>;

export type ReservationModuleFullPrisma = Prisma.reservation_moduleGetPayload<{
	include: typeof reservationModuleFull;
}>;
