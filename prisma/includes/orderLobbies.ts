import { Prisma } from '@prisma/client';

const croppedUserColumns = {
	first_name: true,
	last_name: true,
	user_id: true,
} as const;

export const orderLobbiesDefaultInclude = Prisma.validator<Prisma.order_lobbiesInclude>()({
	order_lobby_items: {
		include: {
			menu_items: {
				include: {
					tax_rate: true,
					image_file: true,
				},
			},
		},
	},
	order_lobby_users: {
		include: {
			users: {
				select: croppedUserColumns,
			},
		},
	},
	delivery_orders: true,
});

export type OrderLobbyWithIncludesPrisma = Prisma.order_lobbiesGetPayload<{
	include: typeof orderLobbiesDefaultInclude;
}>;

export default orderLobbiesDefaultInclude;
