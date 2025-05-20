import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { wallet_fundsCountOrderByAggregateInputSchema } from './wallet_fundsCountOrderByAggregateInputSchema';
import { wallet_fundsAvgOrderByAggregateInputSchema } from './wallet_fundsAvgOrderByAggregateInputSchema';
import { wallet_fundsMaxOrderByAggregateInputSchema } from './wallet_fundsMaxOrderByAggregateInputSchema';
import { wallet_fundsMinOrderByAggregateInputSchema } from './wallet_fundsMinOrderByAggregateInputSchema';
import { wallet_fundsSumOrderByAggregateInputSchema } from './wallet_fundsSumOrderByAggregateInputSchema';

export const wallet_fundsOrderByWithAggregationInputSchema: z.ZodType<Prisma.wallet_fundsOrderByWithAggregationInput> =
	z
		.object({
			wallet_funds_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			referral_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			charge_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			amount: z.lazy(() => SortOrderSchema).optional(),
			reserved_order: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			reserved_daily_meals_subscription: z
				.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
				.optional(),
			reserved_business: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			expires_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			_count: z.lazy(() => wallet_fundsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => wallet_fundsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => wallet_fundsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => wallet_fundsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => wallet_fundsSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default wallet_fundsOrderByWithAggregationInputSchema;
