import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { wallet_transfer_historyCountOrderByAggregateInputSchema } from './wallet_transfer_historyCountOrderByAggregateInputSchema';
import { wallet_transfer_historyAvgOrderByAggregateInputSchema } from './wallet_transfer_historyAvgOrderByAggregateInputSchema';
import { wallet_transfer_historyMaxOrderByAggregateInputSchema } from './wallet_transfer_historyMaxOrderByAggregateInputSchema';
import { wallet_transfer_historyMinOrderByAggregateInputSchema } from './wallet_transfer_historyMinOrderByAggregateInputSchema';
import { wallet_transfer_historySumOrderByAggregateInputSchema } from './wallet_transfer_historySumOrderByAggregateInputSchema';

export const wallet_transfer_historyOrderByWithAggregationInputSchema: z.ZodType<Prisma.wallet_transfer_historyOrderByWithAggregationInput> = z.object({
  wallet_transfer_history_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  success: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => wallet_transfer_historyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => wallet_transfer_historyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => wallet_transfer_historyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => wallet_transfer_historyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => wallet_transfer_historySumOrderByAggregateInputSchema).optional()
}).strict();

export default wallet_transfer_historyOrderByWithAggregationInputSchema;
