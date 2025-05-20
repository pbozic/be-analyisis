import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const cashbackOrderByRelationAggregateInputSchema: z.ZodType<Prisma.cashbackOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default cashbackOrderByRelationAggregateInputSchema;
