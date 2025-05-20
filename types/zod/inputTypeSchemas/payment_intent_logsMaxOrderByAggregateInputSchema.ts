import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const payment_intent_logsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.payment_intent_logsMaxOrderByAggregateInput> =
	z
		.object({
			payment_intent_logs_id: z.lazy(() => SortOrderSchema).optional(),
			stripe_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default payment_intent_logsMaxOrderByAggregateInputSchema;
