import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const usersCountOutputTypeSelectSchema: z.ZodType<Prisma.usersCountOutputTypeSelect> = z
	.object({
		user_roles: z.boolean().optional(),
		addresses: z.boolean().optional(),
		tokens: z.boolean().optional(),
		business_users: z.boolean().optional(),
		orders: z.boolean().optional(),
		documents: z.boolean().optional(),
		delivery_orders: z.boolean().optional(),
		reviews: z.boolean().optional(),
		transactions: z.boolean().optional(),
		reservations: z.boolean().optional(),
		flag_changes: z.boolean().optional(),
		lost_items: z.boolean().optional(),
		child_users: z.boolean().optional(),
		wallet_funds: z.boolean().optional(),
		referrals_made: z.boolean().optional(),
		cashback: z.boolean().optional(),
		order_lobby_users: z.boolean().optional(),
		promo_section_buys: z.boolean().optional(),
		user_favorite_businesses: z.boolean().optional(),
		scoring_points: z.boolean().optional(),
		daily_meals_subscriptions: z.boolean().optional(),
		late_events: z.boolean().optional(),
		account_actions: z.boolean().optional(),
		created_account_actions: z.boolean().optional(),
	})
	.strict();

export default usersCountOutputTypeSelectSchema;
