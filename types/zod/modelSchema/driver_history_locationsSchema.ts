import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'

/////////////////////////////////////////
// DRIVER HISTORY LOCATIONS SCHEMA
/////////////////////////////////////////

export const driver_history_locationsSchema = z.object({
  driver_history_location_id: z.string().uuid(),
  driver_id: z.string(),
  taxi_order_id: z.string().nullable(),
  delivery_order_id: z.string().nullable(),
  status: z.string().nullable(),
  location: JsonValueSchema.nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type driver_history_locations = z.infer<typeof driver_history_locationsSchema>

/////////////////////////////////////////
// DRIVER HISTORY LOCATIONS RELATION SCHEMA
/////////////////////////////////////////

export type driver_history_locationsRelations = {
  driver?: driversWithRelations | null;
  order?: taxi_ordersWithRelations | null;
  delivery_order?: delivery_ordersWithRelations | null;
};

export type driver_history_locationsWithRelations = Omit<z.infer<typeof driver_history_locationsSchema>, "location"> & {
  location?: JsonValueType | null;
} & driver_history_locationsRelations

export const driver_history_locationsWithRelationsSchema: z.ZodType<driver_history_locationsWithRelations> = driver_history_locationsSchema.merge(z.object({
  driver: z.lazy(() => driversWithRelationsSchema).nullable(),
  order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
  delivery_order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
}))

export default driver_history_locationsSchema;
