import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { businessCountOrderByAggregateInputSchema } from './businessCountOrderByAggregateInputSchema';
import { businessAvgOrderByAggregateInputSchema } from './businessAvgOrderByAggregateInputSchema';
import { businessMaxOrderByAggregateInputSchema } from './businessMaxOrderByAggregateInputSchema';
import { businessMinOrderByAggregateInputSchema } from './businessMinOrderByAggregateInputSchema';
import { businessSumOrderByAggregateInputSchema } from './businessSumOrderByAggregateInputSchema';

export const businessOrderByWithAggregationInputSchema: z.ZodType<Prisma.businessOrderByWithAggregationInput> = z
	.object({
		business_id: z.lazy(() => SortOrderSchema).optional(),
		address_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_address_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		finance_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		is_business_unit: z.lazy(() => SortOrderSchema).optional(),
		business_group_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		tax_id: z.lazy(() => SortOrderSchema).optional(),
		registration_id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		telephone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		telephone_code: z.lazy(() => SortOrderSchema).optional(),
		telephone_number: z.lazy(() => SortOrderSchema).optional(),
		website_url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		working_hours: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		seats: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		minimum_order: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals_on_weekend: z.lazy(() => SortOrderSchema).optional(),
		popular: z.lazy(() => SortOrderSchema).optional(),
		new: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		parent_business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		reviewable_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_account_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_customer_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		word_buy_stripe_product_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		word_buy_stripe_subscription_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		daily_users_sorted: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		daily_users_sorting_type: z.lazy(() => SortOrderSchema).optional(),
		restaurant_overwhelmed: z.lazy(() => SortOrderSchema).optional(),
		first_activated_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		sales_representative_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		fiscal_devices_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		purchase_order_limit_amount: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		_count: z.lazy(() => businessCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => businessAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => businessMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => businessMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => businessSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default businessOrderByWithAggregationInputSchema;
