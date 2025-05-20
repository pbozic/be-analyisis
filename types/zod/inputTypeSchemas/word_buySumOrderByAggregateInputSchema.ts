import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const word_buySumOrderByAggregateInputSchema: z.ZodType<Prisma.word_buySumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default word_buySumOrderByAggregateInputSchema;
