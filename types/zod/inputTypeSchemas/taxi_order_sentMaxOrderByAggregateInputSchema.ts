import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const taxi_order_sentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.taxi_order_sentMaxOrderByAggregateInput> =
	z
		.object({
			taxi_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			accepted: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			rejected: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default taxi_order_sentMaxOrderByAggregateInputSchema;
