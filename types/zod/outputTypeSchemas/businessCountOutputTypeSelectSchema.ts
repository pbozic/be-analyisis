import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const businessCountOutputTypeSelectSchema: z.ZodType<Prisma.businessCountOutputTypeSelect> = z
	.object({
		business_users: z.boolean().optional(),
		documents: z.boolean().optional(),
		child_businesses: z.boolean().optional(),
		taxi_orders: z.boolean().optional(),
		delivery_orders: z.boolean().optional(),
		menus: z.boolean().optional(),
		word_buys: z.boolean().optional(),
		reservations: z.boolean().optional(),
		promo_sections: z.boolean().optional(),
		business_teams: z.boolean().optional(),
		business_order_lobbies: z.boolean().optional(),
		user_favorite_businesses: z.boolean().optional(),
		scoring_points: z.boolean().optional(),
		daily_meal_drivers: z.boolean().optional(),
		late_events: z.boolean().optional(),
		daily_meals_subscribers: z.boolean().optional(),
		account_actions: z.boolean().optional(),
		business_clients: z.boolean().optional(),
	})
	.strict();

export default businessCountOutputTypeSelectSchema;
