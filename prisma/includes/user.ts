import { Prisma } from '@prisma/client';

export const userAllInclude = Prisma.validator<Prisma.usersInclude>()({
	child_users: true,
	parent_user: true,
	user_roles: true,
	addresses: true,
	driver: {
		include: {
			vehicles: {
				include: {
					vehicle: true,
				},
			},
			current_vehicle: true,
			activity_logs: true,
		},
	},
	referrals_made: true,
	referral: true,
	user_favorite_businesses: true,
	business_users: {
		include: {
			business: true,
			operating_address: true,
		},
	},
	profile_picture: true,
	user_favorite_drivers: true,
} as const);

export const userFamilyInclude = Prisma.validator<Prisma.usersInclude>()({
	child_users: true,
	parent_user: true,
} as const);

export const userAddressesInclude = Prisma.validator<Prisma.usersInclude>()({
	addresses: {
		include: {
			address: true,
		},
	},
} as const);

export const userAddressesAndConnectionsInclude = Prisma.validator<Prisma.usersInclude>()({
	addresses: {
		include: {
			address: true,
		},
	},
	child_users: { include: { child_user: true } },
	parent_user: { include: { parent_user: true } },
} as const);

export const userLoginInclude = Prisma.validator<Prisma.usersInclude>()({
	addresses: {
		include: {
			address: true,
		},
	},
	driver: {
		select: {
			driver_id: true,
			transport_module_id: true,
			user_id: true,
			ride_requirements: true,
			transfer_requirements: true,
			taxi_orders_toggled: true,
			transfer_orders_toggled: true,
			delivery_orders_toggled: true,
			courier_orders_toggled: true,
			vehicles: {
				select: {
					vehicle_drivers_id: true,
					vehicle_id: true,
					can_drive: true,
					vehicle: {
						select: {
							vehicle_id: true,
							transport_module_id: true,
							active: true,
							class: true,
							category: true,
							make: true,
							model: true,
							color: true,
							license_plate: true,
						},
					},
				},
			},
			last_used_vehicle_id: true,
			current_vehicle: true,
			activity_logs: {
				orderBy: {
					started_at: 'desc',
				},
			},
		},
	},
	child_users: { include: { child_user: true } },
	parent_user: { include: { parent_user: true } },
	referrals_made: true,
	referral: { include: { referrer: { select: { first_name: true, last_name: true } } } },
	user_roles: true,
	user_favorite_businesses: true,
	business_users: {
		include: {
			business: {
				include: {
					business_details: true,
					address: true,
					transport_module: true,
					reservation_module: true,
					food_drinks_module: true,
					stores_module: true,
					daily_meals_module: true,
					table_reservations_module: true,
				},
			},
			operating_address: true,
		},
	},
	profile_picture: true,
	user_favorite_drivers: true,
} as const);

export const userCreationInclude = Prisma.validator<Prisma.usersInclude>()({
	child_users: true,
	parent_user: true,
	user_roles: true,
	addresses: true,
} as const);

export const userIncludeDriver = Prisma.validator<Prisma.usersInclude>()({
	driver: true,
} as const);
export const tokenWithUserInclude = Prisma.validator<Prisma.tokensInclude>()({
	users: true,
} as const);

export const userAddressAndRolesInclude = Prisma.validator<Prisma.usersInclude>()({
	addresses: {
		include: {
			address: true,
		},
	},
	user_roles: true,
} as const);

export type TokenWithUserPrisma = Prisma.tokensGetPayload<{
	include: typeof tokenWithUserInclude;
}>;

export type UserAddressAndRolesPrisma = Prisma.usersGetPayload<{
	include: typeof userAddressAndRolesInclude;
}>;

export type UserFamilyPrisma = Prisma.usersGetPayload<{
	include: typeof userFamilyInclude;
}>;

export type UserAddressesPrisma = Prisma.usersGetPayload<{
	include: typeof userAddressesInclude;
}>;

export type UserLoginPrisma = Prisma.usersGetPayload<{
	include: typeof userLoginInclude;
}>;

export type UserCreationPrisma = Prisma.usersGetPayload<{
	include: typeof userCreationInclude;
}>;
export type UserAddressesAndConnectionsCreationPrisma = Prisma.usersGetPayload<{
	include: typeof userAddressesAndConnectionsInclude;
}>;
export type UserDriverPrisma = Prisma.usersGetPayload<{
	include: typeof userIncludeDriver;
}>;

export type UserPrisma = Prisma.usersGetPayload<{
	include: typeof userAllInclude;
}>;
