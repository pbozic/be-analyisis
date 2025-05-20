import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_usersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.business_usersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default business_usersOrderByRelationAggregateInputSchema;
