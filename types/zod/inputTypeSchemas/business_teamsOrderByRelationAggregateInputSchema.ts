import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_teamsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.business_teamsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default business_teamsOrderByRelationAggregateInputSchema;
