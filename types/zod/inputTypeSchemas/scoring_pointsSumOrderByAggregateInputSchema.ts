import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const scoring_pointsSumOrderByAggregateInputSchema: z.ZodType<Prisma.scoring_pointsSumOrderByAggregateInput> = z.object({
  points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default scoring_pointsSumOrderByAggregateInputSchema;
