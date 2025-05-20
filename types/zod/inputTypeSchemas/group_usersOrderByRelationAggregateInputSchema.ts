import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const group_usersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.group_usersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default group_usersOrderByRelationAggregateInputSchema;
