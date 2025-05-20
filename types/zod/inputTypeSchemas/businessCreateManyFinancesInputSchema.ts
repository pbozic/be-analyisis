import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';

export const businessCreateManyFinancesInputSchema: z.ZodType<Prisma.businessCreateManyFinancesInput> = z
	.object({
		business_id: z.string().uuid().optional(),
		address_id: z.string().optional().nullable(),
		delivery_address_id: z.string().optional().nullable(),
		type: z.lazy(() => BUSINESS_TYPESchema),
		is_business_unit: z.boolean().optional(),
		business_group_name: z.string().optional().nullable(),
		name: z.string(),
		description: z.string().optional().nullable(),
		tax_id: z.string(),
		registration_id: z.string(),
		email: z.string(),
		telephone: z.string().optional().nullable(),
		telephone_code: z.string(),
		telephone_number: z.string(),
		website_url: z.string().optional().nullable(),
		working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		seats: z.number().int().optional().nullable(),
		minimum_order: z.number().int(),
		offers_daily_meals: z.boolean().optional(),
		offers_daily_meals_on_weekend: z.boolean().optional(),
		popular: z.boolean().optional(),
		new: z.boolean().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		parent_business_id: z.string().optional().nullable(),
		reviewable_id: z.string().optional().nullable(),
		stripe_account_id: z.string().optional().nullable(),
		stripe_customer_id: z.string().optional().nullable(),
		word_buy_stripe_product_id: z.string().optional().nullable(),
		word_buy_stripe_subscription_id: z.string().optional().nullable(),
		daily_users_sorted: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		daily_users_sorting_type: z.lazy(() => SORTING_TYPESchema).optional(),
		restaurant_overwhelmed: z.boolean().optional(),
		first_activated_at: z.coerce.date().optional().nullable(),
		active: z.boolean().optional(),
		sales_representative_id: z.string().optional().nullable(),
		fiscal_devices_id: z.string().optional().nullable(),
		purchase_order_limit_amount: z.number().optional().nullable(),
	})
	.strict();

export default businessCreateManyFinancesInputSchema;
