import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const businessSumOrderByAggregateInputSchema: z.ZodType<Prisma.businessSumOrderByAggregateInput> = z.object({
  seats: z.lazy(() => SortOrderSchema).optional(),
  minimum_order: z.lazy(() => SortOrderSchema).optional(),
  purchase_order_limit_amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default businessSumOrderByAggregateInputSchema;
