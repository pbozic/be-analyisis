import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGENDERNullableFilterSchema } from './EnumGENDERNullableFilterSchema';
import { GENDERSchema } from './GENDERSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumUSER_ROLESFilterSchema } from './EnumUSER_ROLESFilterSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';

export const usersScalarWhereInputSchema: z.ZodType<Prisma.usersScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => usersScalarWhereInputSchema), z.lazy(() => usersScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => usersScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => usersScalarWhereInputSchema), z.lazy(() => usersScalarWhereInputSchema).array()])
			.optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		first_name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		last_name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		gender: z
			.union([z.lazy(() => EnumGENDERNullableFilterSchema), z.lazy(() => GENDERSchema)])
			.optional()
			.nullable(),
		email: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		telephone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		telephone_code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		telephone_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		date_of_birth: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		user_role: z.union([z.lazy(() => EnumUSER_ROLESFilterSchema), z.lazy(() => USER_ROLESSchema)]).optional(),
		phone_verified: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		taxi_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		reviewable_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		review_complete: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		one_signal_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		stripe_customer_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		wallet_balance: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		transfer_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		allergies_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		spicy_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		radio_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		subscribed_to_daily_meals: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		daily_meal_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		details: z.lazy(() => JsonNullableFilterSchema).optional(),
		taxi_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		transfer_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		delivery_push_notification_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		spoken_languages: z.lazy(() => JsonNullableFilterSchema).optional(),
		daily_meal_day_preferences: z.lazy(() => JsonNullableFilterSchema).optional(),
		disabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		language: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		apple_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		google_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		referral_code: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		activated_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		business_teams_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		allow_marketing_push_notifications: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		allow_ads_personalization: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		allow_newsletter: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
	})
	.strict();

export default usersScalarWhereInputSchema;
