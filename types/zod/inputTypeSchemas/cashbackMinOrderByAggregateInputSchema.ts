import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const cashbackMinOrderByAggregateInputSchema: z.ZodType<Prisma.cashbackMinOrderByAggregateInput> = z
	.object({
		cashback_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		amount: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		source: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		earned_at: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		converted_at: z.lazy(() => SortOrderSchema).optional(),
		taxi_order_id: z.lazy(() => SortOrderSchema).optional(),
		delivery_order_id: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default cashbackMinOrderByAggregateInputSchema;
