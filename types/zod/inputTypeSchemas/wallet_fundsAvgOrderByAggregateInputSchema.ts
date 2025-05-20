import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_fundsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_fundsAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wallet_fundsAvgOrderByAggregateInputSchema;
