import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const wallet_transfer_historyCountOrderByAggregateInputSchema: z.ZodType<Prisma.wallet_transfer_historyCountOrderByAggregateInput> = z.object({
  wallet_transfer_history_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  success: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default wallet_transfer_historyCountOrderByAggregateInputSchema;
