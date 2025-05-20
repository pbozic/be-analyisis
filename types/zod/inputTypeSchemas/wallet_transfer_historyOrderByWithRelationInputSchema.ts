import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';

export const wallet_transfer_historyOrderByWithRelationInputSchema: z.ZodType<Prisma.wallet_transfer_historyOrderByWithRelationInput> = z.object({
  wallet_transfer_history_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  success: z.lazy(() => SortOrderSchema).optional(),
  delivery_order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
  taxi_order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional()
}).strict();

export default wallet_transfer_historyOrderByWithRelationInputSchema;
