import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_order_sentCountOrderByAggregateInputSchema } from './delivery_order_sentCountOrderByAggregateInputSchema';
import { delivery_order_sentMaxOrderByAggregateInputSchema } from './delivery_order_sentMaxOrderByAggregateInputSchema';
import { delivery_order_sentMinOrderByAggregateInputSchema } from './delivery_order_sentMinOrderByAggregateInputSchema';

export const delivery_order_sentOrderByWithAggregationInputSchema: z.ZodType<Prisma.delivery_order_sentOrderByWithAggregationInput> = z.object({
  delivery_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  accepted: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeline: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => delivery_order_sentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => delivery_order_sentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => delivery_order_sentMinOrderByAggregateInputSchema).optional()
}).strict();

export default delivery_order_sentOrderByWithAggregationInputSchema;
