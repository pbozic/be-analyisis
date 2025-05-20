import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const word_buyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.word_buyAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default word_buyAvgOrderByAggregateInputSchema;
