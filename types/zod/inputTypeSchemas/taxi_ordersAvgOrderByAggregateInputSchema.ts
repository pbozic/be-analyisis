import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const taxi_ordersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.taxi_ordersAvgOrderByAggregateInput> = z
	.object({
		find_drivers_attempts: z.lazy(() => SortOrderSchema).optional(),
		order_number: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default taxi_ordersAvgOrderByAggregateInputSchema;
