import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const word_bundlesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.word_bundlesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default word_bundlesOrderByRelationAggregateInputSchema;
