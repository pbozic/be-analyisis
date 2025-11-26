import { Prisma } from '@prisma/client';

import { menuDefault } from './menu';
export const getBusinessesInclude = Prisma.validator<Prisma.businessInclude>()({
	address: true,
	business_details: {
		include: {
			logo: true,
			banner: true,
		},
	},
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
} as const);

export type BusinessFindManyArgs = Omit<Prisma.businessFindManyArgs, 'select' | 'include'> & {
	include?: Partial<Prisma.businessInclude>;
};

export type GetBusinessesPrisma = Prisma.businessGetPayload<{
	include: typeof getBusinessesInclude;
}>;

export const businessByIdInclude = Prisma.validator<Prisma.businessInclude>()({
	business_details: {
		include: {
			logo: true,
			banner: true,
		},
	},
	address: true,
	stores_module: {
		include: {
			business_local_locations: {
				where: { time: { gte: new Date() } },
				include: { local_location: { include: { address: true } } },
				orderBy: { time: 'asc' },
			},
			...menuDefault,
			business_details: {
				include: {
					logo: true,
					banner: true,
				},
			},
		},
	},
	business_users: { include: { users: true } },
	reservation_module: {
		include: {
			business_details: {
				include: {
					logo: true,
					banner: true,
				},
			},
		},
	},
	crm_module: { include: { business_clients: true } },
	food_drinks_module: {
		include: {
			...menuDefault,
			business_details: {
				include: {
					logo: true,
					banner: true,
				},
			},
		},
	},
	daily_meals_module: {
		include: {
			daily_meal_menus: true,
			daily_meal_drivers: true,
			daily_meal_categories: true,
			daily_meal_subscriptions: true,
		},
	},
	table_reservations_module: {
		include: {
			reservations: {
				include: {
					user: true,
				},
			},
			business_details: {
				include: {
					logo: true,
					banner: true,
				},
			},
		},
	},
	transport_module: true,
	parent_business: true,
	child_businesses: true,
});

// Common include: address + business_users (with nested users)
export const addressAndUsersInclude = Prisma.validator<Prisma.businessInclude>()({
	address: true,
	business_details: true,
	business_users: {
		include: {
			users: true,
		},
	},
} as const);

export const addressInclude = Prisma.validator<Prisma.businessInclude>()({
	address: true,
	business_details: true,
} as const);

// Admin include used by getBusinessAdminDataById
export const adminInclude = {
	address: true,
	business_details: true,
	business_users: { include: { users: true } },
	words: true,
	promo: true,
	parent_business: true,
	child_businesses: true,
} as const;

// Select shape used for search endpoints
export const businessSearchSelect = Prisma.validator<Prisma.businessSelect>()({
	business_id: true,
	business_details: { select: { name: true, description: true } },
	email: true,
	telephone: true,
	website_url: true,
	active: true,
	address: true,
} as const);

export type BusinessWithAddressAndUsersPrisma = Prisma.businessGetPayload<{
	include: typeof addressAndUsersInclude;
}>;

export type BusinessWithAddressPrisma = Prisma.businessGetPayload<{
	include: typeof addressInclude;
}>;

export type BusinessAdminPrisma = Prisma.businessGetPayload<{
	include: typeof adminInclude;
}>;

export type BusinessSearchSelectPrisma = Prisma.businessGetPayload<{
	select: typeof businessSearchSelect;
}>;

// 3) Derive the runtime-accurate payload type (scalars + relations)
export type BusinessByIdPrisma = Prisma.businessGetPayload<{
	include: typeof businessByIdInclude;
}>;
