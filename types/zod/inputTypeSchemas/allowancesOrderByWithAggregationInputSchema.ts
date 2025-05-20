import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { allowancesCountOrderByAggregateInputSchema } from './allowancesCountOrderByAggregateInputSchema';
import { allowancesAvgOrderByAggregateInputSchema } from './allowancesAvgOrderByAggregateInputSchema';
import { allowancesMaxOrderByAggregateInputSchema } from './allowancesMaxOrderByAggregateInputSchema';
import { allowancesMinOrderByAggregateInputSchema } from './allowancesMinOrderByAggregateInputSchema';
import { allowancesSumOrderByAggregateInputSchema } from './allowancesSumOrderByAggregateInputSchema';

export const allowancesOrderByWithAggregationInputSchema: z.ZodType<Prisma.allowancesOrderByWithAggregationInput> = z
	.object({
		allowance_id: z.lazy(() => SortOrderSchema).optional(),
		group_user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_users_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		amount_taxi_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_any_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_taxi_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_transfer_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_delivery_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		amount_any_purchase_order: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => allowancesCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => allowancesAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => allowancesMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => allowancesMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => allowancesSumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default allowancesOrderByWithAggregationInputSchema;
