import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { word_buyCountOrderByAggregateInputSchema } from './word_buyCountOrderByAggregateInputSchema';
import { word_buyAvgOrderByAggregateInputSchema } from './word_buyAvgOrderByAggregateInputSchema';
import { word_buyMaxOrderByAggregateInputSchema } from './word_buyMaxOrderByAggregateInputSchema';
import { word_buyMinOrderByAggregateInputSchema } from './word_buyMinOrderByAggregateInputSchema';
import { word_buySumOrderByAggregateInputSchema } from './word_buySumOrderByAggregateInputSchema';

export const word_buyOrderByWithAggregationInputSchema: z.ZodType<Prisma.word_buyOrderByWithAggregationInput> = z
	.object({
		word_buy_id: z.lazy(() => SortOrderSchema).optional(),
		word_id: z.lazy(() => SortOrderSchema).optional(),
		stripe_subscription_id: z.lazy(() => SortOrderSchema).optional(),
		price: z.lazy(() => SortOrderSchema).optional(),
		active_at: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		deleted_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => word_buyCountOrderByAggregateInputSchema).optional(),
		_avg: z.lazy(() => word_buyAvgOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => word_buyMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => word_buyMinOrderByAggregateInputSchema).optional(),
		_sum: z.lazy(() => word_buySumOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default word_buyOrderByWithAggregationInputSchema;
