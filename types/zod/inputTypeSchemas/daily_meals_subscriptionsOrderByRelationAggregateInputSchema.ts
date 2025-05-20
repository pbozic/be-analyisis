import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const daily_meals_subscriptionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default daily_meals_subscriptionsOrderByRelationAggregateInputSchema;
