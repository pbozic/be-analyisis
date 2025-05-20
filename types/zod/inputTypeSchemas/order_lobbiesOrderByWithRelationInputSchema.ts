import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { order_lobby_itemsOrderByRelationAggregateInputSchema } from './order_lobby_itemsOrderByRelationAggregateInputSchema';
import { order_lobby_usersOrderByRelationAggregateInputSchema } from './order_lobby_usersOrderByRelationAggregateInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const order_lobbiesOrderByWithRelationInputSchema: z.ZodType<Prisma.order_lobbiesOrderByWithRelationInput> = z.object({
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
  order_lobby_items: z.lazy(() => order_lobby_itemsOrderByRelationAggregateInputSchema).optional(),
  order_lobby_users: z.lazy(() => order_lobby_usersOrderByRelationAggregateInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional()
}).strict();

export default order_lobbiesOrderByWithRelationInputSchema;
