import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const businessMinOrderByAggregateInputSchema: z.ZodType<Prisma.businessMinOrderByAggregateInput> = z
	.object({
		business_id: z.lazy(() => SortOrderSchema).optional(),
		address_id: z.lazy(() => SortOrderSchema).optional(),
		delivery_address_id: z.lazy(() => SortOrderSchema).optional(),
		finance_id: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		is_business_unit: z.lazy(() => SortOrderSchema).optional(),
		business_group_name: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		tax_id: z.lazy(() => SortOrderSchema).optional(),
		registration_id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		telephone: z.lazy(() => SortOrderSchema).optional(),
		telephone_code: z.lazy(() => SortOrderSchema).optional(),
		telephone_number: z.lazy(() => SortOrderSchema).optional(),
		website_url: z.lazy(() => SortOrderSchema).optional(),
		seats: z.lazy(() => SortOrderSchema).optional(),
		minimum_order: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals_on_weekend: z.lazy(() => SortOrderSchema).optional(),
		popular: z.lazy(() => SortOrderSchema).optional(),
		new: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		parent_business_id: z.lazy(() => SortOrderSchema).optional(),
		reviewable_id: z.lazy(() => SortOrderSchema).optional(),
		stripe_account_id: z.lazy(() => SortOrderSchema).optional(),
		stripe_customer_id: z.lazy(() => SortOrderSchema).optional(),
		word_buy_stripe_product_id: z.lazy(() => SortOrderSchema).optional(),
		word_buy_stripe_subscription_id: z.lazy(() => SortOrderSchema).optional(),
		daily_users_sorting_type: z.lazy(() => SortOrderSchema).optional(),
		restaurant_overwhelmed: z.lazy(() => SortOrderSchema).optional(),
		first_activated_at: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		sales_representative_id: z.lazy(() => SortOrderSchema).optional(),
		fiscal_devices_id: z.lazy(() => SortOrderSchema).optional(),
		purchase_order_limit_amount: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default businessMinOrderByAggregateInputSchema;
