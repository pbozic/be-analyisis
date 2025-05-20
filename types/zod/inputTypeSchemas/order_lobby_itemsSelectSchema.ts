import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesArgsSchema } from "../outputTypeSchemas/order_lobbiesArgsSchema"

export const order_lobby_itemsSelectSchema: z.ZodType<Prisma.order_lobby_itemsSelect> = z.object({
  order_lobby_items_id: z.boolean().optional(),
  order_lobbies_id: z.boolean().optional(),
  menu_item_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  sides: z.boolean().optional(),
  extras: z.boolean().optional(),
  quantity: z.boolean().optional(),
  customer_note: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  order_lobbies: z.union([z.boolean(),z.lazy(() => order_lobbiesArgsSchema)]).optional(),
}).strict()

export default order_lobby_itemsSelectSchema;
