import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumGENDERNullableWithAggregatesFilterSchema } from './EnumGENDERNullableWithAggregatesFilterSchema';
import { GENDERSchema } from './GENDERSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumUSER_ROLESWithAggregatesFilterSchema } from './EnumUSER_ROLESWithAggregatesFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';

export const usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.usersScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => usersScalarWhereWithAggregatesInputSchema),
				z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => usersScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => usersScalarWhereWithAggregatesInputSchema),
				z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		first_name: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		last_name: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		gender: z
			.union([z.lazy(() => EnumGENDERNullableWithAggregatesFilterSchema), z.lazy(() => GENDERSchema)])
			.optional()
			.nullable(),
		email: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		telephone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		telephone_code: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		telephone_number: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		date_of_birth: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		user_role: z
			.union([z.lazy(() => EnumUSER_ROLESWithAggregatesFilterSchema), z.lazy(() => USER_ROLESSchema)])
			.optional(),
		phone_verified: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		notification_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		taxi_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		reviewable_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		review_complete: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		one_signal_id: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		stripe_customer_id: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		wallet_balance: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
		transfer_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		allergies_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		spicy_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		radio_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		subscribed_to_daily_meals: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		daily_meal_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		details: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		taxi_push_notification_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		transfer_push_notification_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		delivery_push_notification_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		spoken_languages: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		daily_meal_day_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		disabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		active: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		language: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		apple_id: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		google_id: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		referral_code: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		activated_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		business_teams_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		allow_marketing_push_notifications: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		allow_ads_personalization: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		allow_newsletter: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
	})
	.strict();

export default usersScalarWhereWithAggregatesInputSchema;
