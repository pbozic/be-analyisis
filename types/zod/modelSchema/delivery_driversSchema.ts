import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { vehiclesWithRelationsSchema } from './vehiclesSchema'
import type { vehiclesWithRelations } from './vehiclesSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { delivery_order_sentWithRelationsSchema } from './delivery_order_sentSchema'
import type { delivery_order_sentWithRelations } from './delivery_order_sentSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { delivery_driver_history_locationsWithRelationsSchema } from './delivery_driver_history_locationsSchema'
import type { delivery_driver_history_locationsWithRelations } from './delivery_driver_history_locationsSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// DELIVERY DRIVERS SCHEMA
/////////////////////////////////////////

export const delivery_driversSchema = z.object({
  delivery_driver_id: z.string().uuid(),
  online: z.boolean().nullable(),
  on_order: z.boolean().nullable(),
  delivers_daily_meals: z.boolean().nullable(),
  working_hours: JsonValueSchema.nullable(),
  business_id: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string().nullable(),
  location: JsonValueSchema.nullable(),
  delivery_timeline: JsonValueSchema.nullable(),
  last_ping_at: z.coerce.date(),
  on_daily_meals: z.boolean().nullable(),
  is_inactive: z.boolean().nullable(),
  scheduled_meals_route: JsonValueSchema.nullable(),
  regions: z.string().array(),
  partner_cash_balance: z.number().nullable(),
  daily_meal_business_id: z.string().nullable(),
})

export type delivery_drivers = z.infer<typeof delivery_driversSchema>

/////////////////////////////////////////
// DELIVERY DRIVERS RELATION SCHEMA
/////////////////////////////////////////

export type delivery_driversRelations = {
  user?: usersWithRelations | null;
  vehicles: vehiclesWithRelations[];
  orders: delivery_ordersWithRelations[];
  received_orders: delivery_order_sentWithRelations[];
  documents: documentsWithRelations[];
  delivery_driver_history_locations: delivery_driver_history_locationsWithRelations[];
  daily_meal_business?: businessWithRelations | null;
};

export type delivery_driversWithRelations = Omit<z.infer<typeof delivery_driversSchema>, "working_hours" | "location" | "delivery_timeline" | "scheduled_meals_route"> & {
  working_hours?: JsonValueType | null;
  location?: JsonValueType | null;
  delivery_timeline?: JsonValueType | null;
  scheduled_meals_route?: JsonValueType | null;
} & delivery_driversRelations

export const delivery_driversWithRelationsSchema: z.ZodType<delivery_driversWithRelations> = delivery_driversSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema).nullable(),
  vehicles: z.lazy(() => vehiclesWithRelationsSchema).array(),
  orders: z.lazy(() => delivery_ordersWithRelationsSchema).array(),
  received_orders: z.lazy(() => delivery_order_sentWithRelationsSchema).array(),
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  delivery_driver_history_locations: z.lazy(() => delivery_driver_history_locationsWithRelationsSchema).array(),
  daily_meal_business: z.lazy(() => businessWithRelationsSchema).nullable(),
}))

export default delivery_driversSchema;
