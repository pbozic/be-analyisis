import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const local_pricesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.local_pricesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default local_pricesOrderByRelationAggregateInputSchema;
