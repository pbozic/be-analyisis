import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersCountOrderByAggregateInputSchema } from './usersCountOrderByAggregateInputSchema';
import { usersAvgOrderByAggregateInputSchema } from './usersAvgOrderByAggregateInputSchema';
import { usersMaxOrderByAggregateInputSchema } from './usersMaxOrderByAggregateInputSchema';
import { usersMinOrderByAggregateInputSchema } from './usersMinOrderByAggregateInputSchema';
import { usersSumOrderByAggregateInputSchema } from './usersSumOrderByAggregateInputSchema';

export const usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = z
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
		_count: z.lazy(() => usersCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => usersAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => usersMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => usersMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => usersSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default usersOrderByWithAggregationInputSchema;
