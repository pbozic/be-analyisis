import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const translationsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.translationsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default translationsOrderByRelationAggregateInputSchema;
