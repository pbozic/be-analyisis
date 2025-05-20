import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const tokensOrderByRelationAggregateInputSchema: z.ZodType<Prisma.tokensOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default tokensOrderByRelationAggregateInputSchema;
