import { z } from 'zod';
import { order_lobbiesWithRelationsSchema } from './order_lobbiesSchema'
import type { order_lobbiesWithRelations } from './order_lobbiesSchema'

/////////////////////////////////////////
// ORDER LOBBY ITEMS SCHEMA
/////////////////////////////////////////

export const order_lobby_itemsSchema = z.object({
  order_lobby_items_id: z.string().uuid(),
  order_lobbies_id: z.string(),
  menu_item_id: z.string(),
  user_id: z.string().nullable(),
  sides: z.string().array(),
  extras: z.string().array(),
  quantity: z.number().int(),
  customer_note: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type order_lobby_items = z.infer<typeof order_lobby_itemsSchema>

/////////////////////////////////////////
// ORDER LOBBY ITEMS RELATION SCHEMA
/////////////////////////////////////////

export type order_lobby_itemsRelations = {
  order_lobbies: order_lobbiesWithRelations;
};

export type order_lobby_itemsWithRelations = z.infer<typeof order_lobby_itemsSchema> & order_lobby_itemsRelations

export const order_lobby_itemsWithRelationsSchema: z.ZodType<order_lobby_itemsWithRelations> = order_lobby_itemsSchema.merge(z.object({
  order_lobbies: z.lazy(() => order_lobbiesWithRelationsSchema),
}))

export default order_lobby_itemsSchema;
