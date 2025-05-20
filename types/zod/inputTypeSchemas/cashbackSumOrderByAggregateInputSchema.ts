import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const cashbackSumOrderByAggregateInputSchema: z.ZodType<Prisma.cashbackSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default cashbackSumOrderByAggregateInputSchema;
