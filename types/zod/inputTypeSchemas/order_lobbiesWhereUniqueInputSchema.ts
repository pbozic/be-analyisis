import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Order_lobby_itemsListRelationFilterSchema } from './Order_lobby_itemsListRelationFilterSchema';
import { Order_lobby_usersListRelationFilterSchema } from './Order_lobby_usersListRelationFilterSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const order_lobbiesWhereUniqueInputSchema: z.ZodType<Prisma.order_lobbiesWhereUniqueInput> = z.union([
  z.object({
    order_lobbies_id: z.string().uuid(),
    delivery_orders_id: z.string()
  }),
  z.object({
    order_lobbies_id: z.string().uuid(),
  }),
  z.object({
    delivery_orders_id: z.string(),
  }),
])
.and(z.object({
  order_lobbies_id: z.string().uuid().optional(),
  delivery_orders_id: z.string().optional(),
  AND: z.union([ z.lazy(() => order_lobbiesWhereInputSchema),z.lazy(() => order_lobbiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => order_lobbiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => order_lobbiesWhereInputSchema),z.lazy(() => order_lobbiesWhereInputSchema).array() ]).optional(),
  lobby_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lobby_description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  delivery_location: z.lazy(() => JsonNullableFilterSchema).optional(),
  courier_note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  restaurant_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  creator_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_lobby_items: z.lazy(() => Order_lobby_itemsListRelationFilterSchema).optional(),
  order_lobby_users: z.lazy(() => Order_lobby_usersListRelationFilterSchema).optional(),
  delivery_orders: z.union([ z.lazy(() => Delivery_ordersNullableRelationFilterSchema),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional().nullable(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
}).strict());

export default order_lobbiesWhereUniqueInputSchema;
