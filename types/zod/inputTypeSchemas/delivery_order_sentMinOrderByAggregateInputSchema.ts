import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const delivery_order_sentMinOrderByAggregateInputSchema: z.ZodType<Prisma.delivery_order_sentMinOrderByAggregateInput> = z.object({
  delivery_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  accepted: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default delivery_order_sentMinOrderByAggregateInputSchema;
