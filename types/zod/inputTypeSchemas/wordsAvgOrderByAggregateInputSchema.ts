import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wordsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.wordsAvgOrderByAggregateInput> = z.object({
  popularity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wordsAvgOrderByAggregateInputSchema;
