import { Prisma } from '@prisma/client';

import { menuDefault } from './menu.ts';

export const businessByIdInclude = Prisma.validator<Prisma.businessInclude>()({
	address: true,
	stores_module: {
		include: {
			business_local_locations: {
				where: { time: { gte: new Date() } },
				include: { local_location: { include: { address: true } } },
				orderBy: { time: 'asc' },
			},
			...menuDefault,
			logo: true,
			banner: true,
		},
	},
	business_users: { include: { users: true } },
	reservation_module: { include: { logo: true, banner: true } },
	crm_module: { include: { business_clients: true } },
	food_drinks_module: {
		include: {
			...menuDefault,
			logo: true,
			banner: true,
		},
	},
	daily_meals_module: true,
	table_reservations_module: {
		include: {
			reservations: {
				include: {
					user: true,
				},
			},
		},
	},
	transport_module: true,
	parent_business: true,
	child_businesses: true,
	logo: true,
	banner: true,
});

// 3) Derive the runtime-accurate payload type (scalars + relations)
export type BusinessByIdRaw = Prisma.businessGetPayload<{
	include: typeof businessByIdInclude;
}>;
