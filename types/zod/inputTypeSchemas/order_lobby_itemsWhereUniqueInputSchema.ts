import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsWhereInputSchema } from './order_lobby_itemsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Order_lobbiesRelationFilterSchema } from './Order_lobbiesRelationFilterSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const order_lobby_itemsWhereUniqueInputSchema: z.ZodType<Prisma.order_lobby_itemsWhereUniqueInput> = z.object({
  order_lobby_items_id: z.string().uuid()
})
.and(z.object({
  order_lobby_items_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => order_lobby_itemsWhereInputSchema),z.lazy(() => order_lobby_itemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => order_lobby_itemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => order_lobby_itemsWhereInputSchema),z.lazy(() => order_lobby_itemsWhereInputSchema).array() ]).optional(),
  order_lobbies_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  sides: z.lazy(() => StringNullableListFilterSchema).optional(),
  extras: z.lazy(() => StringNullableListFilterSchema).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  customer_note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_lobbies: z.union([ z.lazy(() => Order_lobbiesRelationFilterSchema),z.lazy(() => order_lobbiesWhereInputSchema) ]).optional(),
}).strict());

export default order_lobby_itemsWhereUniqueInputSchema;
