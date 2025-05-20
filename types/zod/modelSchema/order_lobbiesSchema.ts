import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { order_lobby_itemsWithRelationsSchema } from './order_lobby_itemsSchema'
import type { order_lobby_itemsWithRelations } from './order_lobby_itemsSchema'
import { order_lobby_usersWithRelationsSchema } from './order_lobby_usersSchema'
import type { order_lobby_usersWithRelations } from './order_lobby_usersSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// ORDER LOBBIES SCHEMA
/////////////////////////////////////////

export const order_lobbiesSchema = z.object({
  order_lobbies_id: z.string().uuid(),
  lobby_name: z.string(),
  lobby_description: z.string(),
  active: z.boolean(),
  delivery_location: JsonValueSchema.nullable(),
  courier_note: z.string().nullable(),
  business_id: z.string(),
  restaurant_id: z.string(),
  creator_id: z.string(),
  delivery_orders_id: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type order_lobbies = z.infer<typeof order_lobbiesSchema>

/////////////////////////////////////////
// ORDER LOBBIES RELATION SCHEMA
/////////////////////////////////////////

export type order_lobbiesRelations = {
  order_lobby_items: order_lobby_itemsWithRelations[];
  order_lobby_users: order_lobby_usersWithRelations[];
  delivery_orders?: delivery_ordersWithRelations | null;
  business?: businessWithRelations | null;
};

export type order_lobbiesWithRelations = Omit<z.infer<typeof order_lobbiesSchema>, "delivery_location"> & {
  delivery_location?: JsonValueType | null;
} & order_lobbiesRelations

export const order_lobbiesWithRelationsSchema: z.ZodType<order_lobbiesWithRelations> = order_lobbiesSchema.merge(z.object({
  order_lobby_items: z.lazy(() => order_lobby_itemsWithRelationsSchema).array(),
  order_lobby_users: z.lazy(() => order_lobby_usersWithRelationsSchema).array(),
  delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
  business: z.lazy(() => businessWithRelationsSchema).nullable(),
}))

export default order_lobbiesSchema;
