import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_teamsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.business_teamsAvgOrderByAggregateInput> = z.object({
  limit_per_person: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default business_teamsAvgOrderByAggregateInputSchema;
