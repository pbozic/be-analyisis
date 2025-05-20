import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { user_rolesOrderByRelationAggregateInputSchema } from './user_rolesOrderByRelationAggregateInputSchema';
import { user_addressOrderByRelationAggregateInputSchema } from './user_addressOrderByRelationAggregateInputSchema';
import { tokensOrderByRelationAggregateInputSchema } from './tokensOrderByRelationAggregateInputSchema';
import { business_usersOrderByRelationAggregateInputSchema } from './business_usersOrderByRelationAggregateInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { delivery_ordersOrderByRelationAggregateInputSchema } from './delivery_ordersOrderByRelationAggregateInputSchema';
import { reviewableOrderByWithRelationInputSchema } from './reviewableOrderByWithRelationInputSchema';
import { reviewsOrderByRelationAggregateInputSchema } from './reviewsOrderByRelationAggregateInputSchema';
import { transactionsOrderByRelationAggregateInputSchema } from './transactionsOrderByRelationAggregateInputSchema';
import { reservationsOrderByRelationAggregateInputSchema } from './reservationsOrderByRelationAggregateInputSchema';
import { flag_historyOrderByRelationAggregateInputSchema } from './flag_historyOrderByRelationAggregateInputSchema';
import { lost_itemsOrderByRelationAggregateInputSchema } from './lost_itemsOrderByRelationAggregateInputSchema';
import { group_usersOrderByRelationAggregateInputSchema } from './group_usersOrderByRelationAggregateInputSchema';
import { group_usersOrderByWithRelationInputSchema } from './group_usersOrderByWithRelationInputSchema';
import { wallet_fundsOrderByRelationAggregateInputSchema } from './wallet_fundsOrderByRelationAggregateInputSchema';
import { referralsOrderByRelationAggregateInputSchema } from './referralsOrderByRelationAggregateInputSchema';
import { referralsOrderByWithRelationInputSchema } from './referralsOrderByWithRelationInputSchema';
import { cashbackOrderByRelationAggregateInputSchema } from './cashbackOrderByRelationAggregateInputSchema';
import { business_teamsOrderByWithRelationInputSchema } from './business_teamsOrderByWithRelationInputSchema';
import { order_lobby_usersOrderByRelationAggregateInputSchema } from './order_lobby_usersOrderByRelationAggregateInputSchema';
import { promo_sections_buyOrderByRelationAggregateInputSchema } from './promo_sections_buyOrderByRelationAggregateInputSchema';
import { user_favorite_businessesOrderByRelationAggregateInputSchema } from './user_favorite_businessesOrderByRelationAggregateInputSchema';
import { scoring_pointsOrderByRelationAggregateInputSchema } from './scoring_pointsOrderByRelationAggregateInputSchema';
import { daily_meals_subscriptionsOrderByRelationAggregateInputSchema } from './daily_meals_subscriptionsOrderByRelationAggregateInputSchema';
import { late_eventsOrderByRelationAggregateInputSchema } from './late_eventsOrderByRelationAggregateInputSchema';
import { account_actionsOrderByRelationAggregateInputSchema } from './account_actionsOrderByRelationAggregateInputSchema';

export const usersOrderByWithRelationInputSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z
	.object({
		user_id: z.lazy(() => SortOrderSchema).optional(),
		first_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		last_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		gender: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		telephone: z.lazy(() => SortOrderSchema).optional(),
		telephone_code: z.lazy(() => SortOrderSchema).optional(),
		telephone_number: z.lazy(() => SortOrderSchema).optional(),
		date_of_birth: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		user_role: z.lazy(() => SortOrderSchema).optional(),
		phone_verified: z.lazy(() => SortOrderSchema).optional(),
		notification_preferences: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		taxi_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		reviewable_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		review_complete: z.lazy(() => SortOrderSchema).optional(),
		one_signal_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_customer_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		wallet_balance: z.lazy(() => SortOrderSchema).optional(),
		transfer_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		allergies_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		spicy_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		radio_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		subscribed_to_daily_meals: z.lazy(() => SortOrderSchema).optional(),
		daily_meal_preferences: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		taxi_push_notification_preferences: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		transfer_push_notification_preferences: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		delivery_push_notification_preferences: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		spoken_languages: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		daily_meal_day_preferences: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		disabled: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		language: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		apple_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		google_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		referral_code: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		activated_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_teams_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		allow_marketing_push_notifications: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		allow_ads_personalization: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		allow_newsletter: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		user_roles: z.lazy(() => user_rolesOrderByRelationAggregateInputSchema).optional(),
		addresses: z.lazy(() => user_addressOrderByRelationAggregateInputSchema).optional(),
		tokens: z.lazy(() => tokensOrderByRelationAggregateInputSchema).optional(),
		business_users: z.lazy(() => business_usersOrderByRelationAggregateInputSchema).optional(),
		driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
		orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional(),
		documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
		delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
		delivery_orders: z.lazy(() => delivery_ordersOrderByRelationAggregateInputSchema).optional(),
		reviewable: z.lazy(() => reviewableOrderByWithRelationInputSchema).optional(),
		reviews: z.lazy(() => reviewsOrderByRelationAggregateInputSchema).optional(),
		transactions: z.lazy(() => transactionsOrderByRelationAggregateInputSchema).optional(),
		reservations: z.lazy(() => reservationsOrderByRelationAggregateInputSchema).optional(),
		flag_changes: z.lazy(() => flag_historyOrderByRelationAggregateInputSchema).optional(),
		lost_items: z.lazy(() => lost_itemsOrderByRelationAggregateInputSchema).optional(),
		child_users: z.lazy(() => group_usersOrderByRelationAggregateInputSchema).optional(),
		parent_user: z.lazy(() => group_usersOrderByWithRelationInputSchema).optional(),
		wallet_funds: z.lazy(() => wallet_fundsOrderByRelationAggregateInputSchema).optional(),
		referrals_made: z.lazy(() => referralsOrderByRelationAggregateInputSchema).optional(),
		referral: z.lazy(() => referralsOrderByWithRelationInputSchema).optional(),
		cashback: z.lazy(() => cashbackOrderByRelationAggregateInputSchema).optional(),
		business_teams: z.lazy(() => business_teamsOrderByWithRelationInputSchema).optional(),
		order_lobby_users: z.lazy(() => order_lobby_usersOrderByRelationAggregateInputSchema).optional(),
		promo_section_buys: z.lazy(() => promo_sections_buyOrderByRelationAggregateInputSchema).optional(),
		user_favorite_businesses: z.lazy(() => user_favorite_businessesOrderByRelationAggregateInputSchema).optional(),
		scoring_points: z.lazy(() => scoring_pointsOrderByRelationAggregateInputSchema).optional(),
		daily_meals_subscriptions: z
			.lazy(() => daily_meals_subscriptionsOrderByRelationAggregateInputSchema)
			.optional(),
		late_events: z.lazy(() => late_eventsOrderByRelationAggregateInputSchema).optional(),
		account_actions: z.lazy(() => account_actionsOrderByRelationAggregateInputSchema).optional(),
		created_account_actions: z.lazy(() => account_actionsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default usersOrderByWithRelationInputSchema;
