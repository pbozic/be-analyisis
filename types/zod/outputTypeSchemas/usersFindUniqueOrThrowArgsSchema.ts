import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersIncludeSchema } from '../inputTypeSchemas/usersIncludeSchema';
import { usersWhereUniqueInputSchema } from '../inputTypeSchemas/usersWhereUniqueInputSchema';
import { user_rolesFindManyArgsSchema } from '../outputTypeSchemas/user_rolesFindManyArgsSchema';
import { user_addressFindManyArgsSchema } from '../outputTypeSchemas/user_addressFindManyArgsSchema';
import { tokensFindManyArgsSchema } from '../outputTypeSchemas/tokensFindManyArgsSchema';
import { business_usersFindManyArgsSchema } from '../outputTypeSchemas/business_usersFindManyArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { taxi_ordersFindManyArgsSchema } from '../outputTypeSchemas/taxi_ordersFindManyArgsSchema';
import { documentsFindManyArgsSchema } from '../outputTypeSchemas/documentsFindManyArgsSchema';
import { delivery_driversArgsSchema } from '../outputTypeSchemas/delivery_driversArgsSchema';
import { delivery_ordersFindManyArgsSchema } from '../outputTypeSchemas/delivery_ordersFindManyArgsSchema';
import { reviewableArgsSchema } from '../outputTypeSchemas/reviewableArgsSchema';
import { reviewsFindManyArgsSchema } from '../outputTypeSchemas/reviewsFindManyArgsSchema';
import { transactionsFindManyArgsSchema } from '../outputTypeSchemas/transactionsFindManyArgsSchema';
import { reservationsFindManyArgsSchema } from '../outputTypeSchemas/reservationsFindManyArgsSchema';
import { flag_historyFindManyArgsSchema } from '../outputTypeSchemas/flag_historyFindManyArgsSchema';
import { lost_itemsFindManyArgsSchema } from '../outputTypeSchemas/lost_itemsFindManyArgsSchema';
import { group_usersFindManyArgsSchema } from '../outputTypeSchemas/group_usersFindManyArgsSchema';
import { group_usersArgsSchema } from '../outputTypeSchemas/group_usersArgsSchema';
import { wallet_fundsFindManyArgsSchema } from '../outputTypeSchemas/wallet_fundsFindManyArgsSchema';
import { referralsFindManyArgsSchema } from '../outputTypeSchemas/referralsFindManyArgsSchema';
import { referralsArgsSchema } from '../outputTypeSchemas/referralsArgsSchema';
import { cashbackFindManyArgsSchema } from '../outputTypeSchemas/cashbackFindManyArgsSchema';
import { business_teamsArgsSchema } from '../outputTypeSchemas/business_teamsArgsSchema';
import { order_lobby_usersFindManyArgsSchema } from '../outputTypeSchemas/order_lobby_usersFindManyArgsSchema';
import { promo_sections_buyFindManyArgsSchema } from '../outputTypeSchemas/promo_sections_buyFindManyArgsSchema';
import { user_favorite_businessesFindManyArgsSchema } from '../outputTypeSchemas/user_favorite_businessesFindManyArgsSchema';
import { scoring_pointsFindManyArgsSchema } from '../outputTypeSchemas/scoring_pointsFindManyArgsSchema';
import { daily_meals_subscriptionsFindManyArgsSchema } from '../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema';
import { late_eventsFindManyArgsSchema } from '../outputTypeSchemas/late_eventsFindManyArgsSchema';
import { account_actionsFindManyArgsSchema } from '../outputTypeSchemas/account_actionsFindManyArgsSchema';
import { UsersCountOutputTypeArgsSchema } from '../outputTypeSchemas/UsersCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const usersSelectSchema: z.ZodType<Prisma.usersSelect> = z
	.object({
		user_id: z.boolean().optional(),
		first_name: z.boolean().optional(),
		last_name: z.boolean().optional(),
		password: z.boolean().optional(),
		gender: z.boolean().optional(),
		email: z.boolean().optional(),
		telephone: z.boolean().optional(),
		telephone_code: z.boolean().optional(),
		telephone_number: z.boolean().optional(),
		date_of_birth: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		user_role: z.boolean().optional(),
		phone_verified: z.boolean().optional(),
		notification_preferences: z.boolean().optional(),
		taxi_preferences: z.boolean().optional(),
		reviewable_id: z.boolean().optional(),
		review_complete: z.boolean().optional(),
		one_signal_id: z.boolean().optional(),
		stripe_customer_id: z.boolean().optional(),
		wallet_balance: z.boolean().optional(),
		transfer_preferences: z.boolean().optional(),
		allergies_preferences: z.boolean().optional(),
		spicy_preferences: z.boolean().optional(),
		radio_preferences: z.boolean().optional(),
		subscribed_to_daily_meals: z.boolean().optional(),
		daily_meal_preferences: z.boolean().optional(),
		details: z.boolean().optional(),
		taxi_push_notification_preferences: z.boolean().optional(),
		transfer_push_notification_preferences: z.boolean().optional(),
		delivery_push_notification_preferences: z.boolean().optional(),
		spoken_languages: z.boolean().optional(),
		daily_meal_day_preferences: z.boolean().optional(),
		disabled: z.boolean().optional(),
		active: z.boolean().optional(),
		language: z.boolean().optional(),
		apple_id: z.boolean().optional(),
		google_id: z.boolean().optional(),
		referral_code: z.boolean().optional(),
		activated_at: z.boolean().optional(),
		business_teams_id: z.boolean().optional(),
		allow_marketing_push_notifications: z.boolean().optional(),
		allow_ads_personalization: z.boolean().optional(),
		allow_newsletter: z.boolean().optional(),
		user_roles: z.union([z.boolean(), z.lazy(() => user_rolesFindManyArgsSchema)]).optional(),
		addresses: z.union([z.boolean(), z.lazy(() => user_addressFindManyArgsSchema)]).optional(),
		tokens: z.union([z.boolean(), z.lazy(() => tokensFindManyArgsSchema)]).optional(),
		business_users: z.union([z.boolean(), z.lazy(() => business_usersFindManyArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		orders: z.union([z.boolean(), z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsFindManyArgsSchema)]).optional(),
		delivery_driver: z.union([z.boolean(), z.lazy(() => delivery_driversArgsSchema)]).optional(),
		delivery_orders: z.union([z.boolean(), z.lazy(() => delivery_ordersFindManyArgsSchema)]).optional(),
		reviewable: z.union([z.boolean(), z.lazy(() => reviewableArgsSchema)]).optional(),
		reviews: z.union([z.boolean(), z.lazy(() => reviewsFindManyArgsSchema)]).optional(),
		transactions: z.union([z.boolean(), z.lazy(() => transactionsFindManyArgsSchema)]).optional(),
		reservations: z.union([z.boolean(), z.lazy(() => reservationsFindManyArgsSchema)]).optional(),
		flag_changes: z.union([z.boolean(), z.lazy(() => flag_historyFindManyArgsSchema)]).optional(),
		lost_items: z.union([z.boolean(), z.lazy(() => lost_itemsFindManyArgsSchema)]).optional(),
		child_users: z.union([z.boolean(), z.lazy(() => group_usersFindManyArgsSchema)]).optional(),
		parent_user: z.union([z.boolean(), z.lazy(() => group_usersArgsSchema)]).optional(),
		wallet_funds: z.union([z.boolean(), z.lazy(() => wallet_fundsFindManyArgsSchema)]).optional(),
		referrals_made: z.union([z.boolean(), z.lazy(() => referralsFindManyArgsSchema)]).optional(),
		referral: z.union([z.boolean(), z.lazy(() => referralsArgsSchema)]).optional(),
		cashback: z.union([z.boolean(), z.lazy(() => cashbackFindManyArgsSchema)]).optional(),
		business_teams: z.union([z.boolean(), z.lazy(() => business_teamsArgsSchema)]).optional(),
		order_lobby_users: z.union([z.boolean(), z.lazy(() => order_lobby_usersFindManyArgsSchema)]).optional(),
		promo_section_buys: z.union([z.boolean(), z.lazy(() => promo_sections_buyFindManyArgsSchema)]).optional(),
		user_favorite_businesses: z
			.union([z.boolean(), z.lazy(() => user_favorite_businessesFindManyArgsSchema)])
			.optional(),
		scoring_points: z.union([z.boolean(), z.lazy(() => scoring_pointsFindManyArgsSchema)]).optional(),
		daily_meals_subscriptions: z
			.union([z.boolean(), z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)])
			.optional(),
		late_events: z.union([z.boolean(), z.lazy(() => late_eventsFindManyArgsSchema)]).optional(),
		account_actions: z.union([z.boolean(), z.lazy(() => account_actionsFindManyArgsSchema)]).optional(),
		created_account_actions: z.union([z.boolean(), z.lazy(() => account_actionsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z
	.object({
		select: usersSelectSchema.optional(),
		include: usersIncludeSchema.optional(),
		where: usersWhereUniqueInputSchema,
	})
	.strict();

export default usersFindUniqueOrThrowArgsSchema;
