import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { order_lobbiesCountOrderByAggregateInputSchema } from './order_lobbiesCountOrderByAggregateInputSchema';
import { order_lobbiesMaxOrderByAggregateInputSchema } from './order_lobbiesMaxOrderByAggregateInputSchema';
import { order_lobbiesMinOrderByAggregateInputSchema } from './order_lobbiesMinOrderByAggregateInputSchema';

export const order_lobbiesOrderByWithAggregationInputSchema: z.ZodType<Prisma.order_lobbiesOrderByWithAggregationInput> = z.object({
  order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
  lobby_name: z.lazy(() => SortOrderSchema).optional(),
  lobby_description: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  delivery_location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  courier_note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  restaurant_id: z.lazy(() => SortOrderSchema).optional(),
  creator_id: z.lazy(() => SortOrderSchema).optional(),
  delivery_orders_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => order_lobbiesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => order_lobbiesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => order_lobbiesMinOrderByAggregateInputSchema).optional()
}).strict();

export default order_lobbiesOrderByWithAggregationInputSchema;
