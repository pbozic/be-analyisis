import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_addressOrderByRelationAggregateInputSchema: z.ZodType<Prisma.user_addressOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default user_addressOrderByRelationAggregateInputSchema;
