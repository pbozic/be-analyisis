import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const scoring_pointsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.scoring_pointsAvgOrderByAggregateInput> = z.object({
  points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default scoring_pointsAvgOrderByAggregateInputSchema;
