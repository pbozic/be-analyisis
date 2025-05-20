import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const usersCreateManyReviewableInputSchema: z.ZodType<Prisma.usersCreateManyReviewableInput> = z
	.object({
		user_id: z.string().uuid().optional(),
		first_name: z.string().optional().nullable(),
		last_name: z.string().optional().nullable(),
		password: z.string(),
		gender: z
			.lazy(() => GENDERSchema)
			.optional()
			.nullable(),
		email: z.string().optional().nullable(),
		telephone: z.string(),
		telephone_code: z.string(),
		telephone_number: z.string(),
		date_of_birth: z.coerce.date(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		user_role: z.lazy(() => USER_ROLESSchema).optional(),
		phone_verified: z.boolean().optional(),
		notification_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		taxi_preferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		review_complete: z.boolean().optional(),
		one_signal_id: z.string().optional().nullable(),
		stripe_customer_id: z.string().optional().nullable(),
		wallet_balance: z.number().optional(),
		transfer_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		allergies_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		spicy_preferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		radio_preferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		subscribed_to_daily_meals: z.boolean().optional(),
		daily_meal_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		details: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		taxi_push_notification_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		transfer_push_notification_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		delivery_push_notification_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		spoken_languages: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		daily_meal_day_preferences: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		disabled: z.boolean().optional(),
		active: z.boolean().optional(),
		language: z.string().optional().nullable(),
		apple_id: z.string().optional().nullable(),
		google_id: z.string().optional().nullable(),
		referral_code: z.string().optional().nullable(),
		activated_at: z.coerce.date().optional().nullable(),
		business_teams_id: z.string().optional().nullable(),
		allow_marketing_push_notifications: z.boolean().optional().nullable(),
		allow_ads_personalization: z.boolean().optional().nullable(),
		allow_newsletter: z.boolean().optional().nullable(),
	})
	.strict();

export default usersCreateManyReviewableInputSchema;
