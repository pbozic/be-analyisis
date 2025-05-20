import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumBUSINESS_TYPEFilterSchema } from './EnumBUSINESS_TYPEFilterSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumSORTING_TYPEFilterSchema } from './EnumSORTING_TYPEFilterSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const businessScalarWhereInputSchema: z.ZodType<Prisma.businessScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => businessScalarWhereInputSchema), z.lazy(() => businessScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => businessScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => businessScalarWhereInputSchema), z.lazy(() => businessScalarWhereInputSchema).array()])
			.optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		address_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		delivery_address_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		finance_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => EnumBUSINESS_TYPEFilterSchema), z.lazy(() => BUSINESS_TYPESchema)]).optional(),
		is_business_unit: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		business_group_name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		tax_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		registration_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		telephone: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		telephone_code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		telephone_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		website_url: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		working_hours: z.lazy(() => JsonNullableFilterSchema).optional(),
		seats: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		minimum_order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		offers_daily_meals: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		offers_daily_meals_on_weekend: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		popular: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		new: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		parent_business_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		reviewable_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		stripe_account_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		stripe_customer_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		word_buy_stripe_product_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		word_buy_stripe_subscription_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		daily_users_sorted: z.lazy(() => JsonNullableFilterSchema).optional(),
		daily_users_sorting_type: z
			.union([z.lazy(() => EnumSORTING_TYPEFilterSchema), z.lazy(() => SORTING_TYPESchema)])
			.optional(),
		restaurant_overwhelmed: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		first_activated_at: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		sales_representative_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		fiscal_devices_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		purchase_order_limit_amount: z
			.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
	})
	.strict();

export default businessScalarWhereInputSchema;
