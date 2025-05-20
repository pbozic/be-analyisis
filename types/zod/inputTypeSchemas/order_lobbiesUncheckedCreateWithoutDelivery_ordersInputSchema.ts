import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema';

export const order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.order_lobbiesUncheckedCreateWithoutDelivery_ordersInput> = z.object({
  order_lobbies_id: z.string().uuid().optional(),
  lobby_name: z.string(),
  lobby_description: z.string(),
  active: z.boolean().optional(),
  delivery_location: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  courier_note: z.string().optional().nullable(),
  business_id: z.string(),
  restaurant_id: z.string(),
  creator_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  order_lobby_items: z.lazy(() => order_lobby_itemsUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema).optional(),
  order_lobby_users: z.lazy(() => order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema).optional()
}).strict();

export default order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema;
