import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { taxi_order_sentCountOrderByAggregateInputSchema } from './taxi_order_sentCountOrderByAggregateInputSchema';
import { taxi_order_sentMaxOrderByAggregateInputSchema } from './taxi_order_sentMaxOrderByAggregateInputSchema';
import { taxi_order_sentMinOrderByAggregateInputSchema } from './taxi_order_sentMinOrderByAggregateInputSchema';

export const taxi_order_sentOrderByWithAggregationInputSchema: z.ZodType<Prisma.taxi_order_sentOrderByWithAggregationInput> =
	z
		.object({
			taxi_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			accepted: z.lazy(() => SortOrderSchema).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			timeline: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			rejected: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => taxi_order_sentCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => taxi_order_sentMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => taxi_order_sentMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default taxi_order_sentOrderByWithAggregationInputSchema;
