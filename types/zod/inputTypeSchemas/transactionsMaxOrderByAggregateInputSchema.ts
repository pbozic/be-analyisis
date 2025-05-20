import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const transactionsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.transactionsMaxOrderByAggregateInput> = z.object({
  transaction_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  delivery_order_id: z.lazy(() => SortOrderSchema).optional(),
  taxi_order_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_fund_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default transactionsMaxOrderByAggregateInputSchema;
