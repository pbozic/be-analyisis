import { Prisma } from '@prisma/client';

import { employeeBase } from './employee';
import { customerBase } from './customer';

export const reservationModuleBase = Prisma.validator<Prisma.reservation_moduleDefaultArgs>()({
	select: {
		reservation_module_id: true,
		business_id: true,
		public_link_hash: true,
		action_bundle_id: true,
		subscription_active_until: true,
		subscription_expires_at: true,
		stripe_subscription_schedule_id: true,
		hours_before_reschedule: true,
		hours_before_cancel: true,
		publicly_visible: true,
	},
});

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

export type ReservationModuleBasePrisma = Prisma.reservation_moduleGetPayload<typeof reservationModuleBase>;

export type ReservationModuleFullPrisma = Prisma.reservation_moduleGetPayload<{
	include: typeof reservationModuleFull;
}>;
