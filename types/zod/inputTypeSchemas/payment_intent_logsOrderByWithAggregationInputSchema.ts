import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { payment_intent_logsCountOrderByAggregateInputSchema } from './payment_intent_logsCountOrderByAggregateInputSchema';
import { payment_intent_logsMaxOrderByAggregateInputSchema } from './payment_intent_logsMaxOrderByAggregateInputSchema';
import { payment_intent_logsMinOrderByAggregateInputSchema } from './payment_intent_logsMinOrderByAggregateInputSchema';

export const payment_intent_logsOrderByWithAggregationInputSchema: z.ZodType<Prisma.payment_intent_logsOrderByWithAggregationInput> =
	z
		.object({
			payment_intent_logs_id: z.lazy(() => SortOrderSchema).optional(),
			stripe_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => payment_intent_logsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => payment_intent_logsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => payment_intent_logsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default payment_intent_logsOrderByWithAggregationInputSchema;
