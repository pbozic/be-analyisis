import { Prisma } from '@prisma/client';

import { menuDefault } from './menu.ts';
export const getBusinessesInclude = {
	address: true,
	delivery_address: true,
	business_users: {
		include: {
			users: {
				include: {
					child_users: { include: { child_user: true } },
					parent_user: { include: { parent_user: true } },
				},
			},
		},
	},
	parent_business: true,
	child_businesses: true,
} as const;

export type BusinessFindManyArgs = Omit<Prisma.businessFindManyArgs, 'select' | 'include'> & {
	include?: Partial<Prisma.businessInclude>;
};

export type GetBusinessesPrisma = Prisma.businessGetPayload<{
	include: typeof getBusinessesInclude;
}>;

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
			logo: true,
			banner: true,
		},
	},
	transport_module: true,
	parent_business: true,
	child_businesses: true,
	logo: true,
	banner: true,
});

// 3) Derive the runtime-accurate payload type (scalars + relations)
export type BusinessByIdPrisma = Prisma.businessGetPayload<{
	include: typeof businessByIdInclude;
}>;
