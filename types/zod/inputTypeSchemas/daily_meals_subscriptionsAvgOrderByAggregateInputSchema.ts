import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const daily_meals_subscriptionsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsAvgOrderByAggregateInput> =
	z
		.object({
			quantity: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default daily_meals_subscriptionsAvgOrderByAggregateInputSchema;
