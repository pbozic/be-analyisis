import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'

/////////////////////////////////////////
// TAXI ORDER SENT SCHEMA
/////////////////////////////////////////

export const taxi_order_sentSchema = z.object({
  taxi_order_sent_id: z.string().uuid(),
  order_id: z.string(),
  driver_id: z.string(),
  accepted: z.boolean(),
  location: JsonValueSchema.nullable(),
  timeline: JsonValueSchema,
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  rejected: z.boolean(),
})

export type taxi_order_sent = z.infer<typeof taxi_order_sentSchema>

/////////////////////////////////////////
// TAXI ORDER SENT RELATION SCHEMA
/////////////////////////////////////////

export type taxi_order_sentRelations = {
  order?: taxi_ordersWithRelations | null;
  driver?: driversWithRelations | null;
};

export type taxi_order_sentWithRelations = Omit<z.infer<typeof taxi_order_sentSchema>, "location"> & {
  location?: JsonValueType | null;
} & taxi_order_sentRelations

export const taxi_order_sentWithRelationsSchema: z.ZodType<taxi_order_sentWithRelations> = taxi_order_sentSchema.merge(z.object({
  order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
  driver: z.lazy(() => driversWithRelationsSchema).nullable(),
}))

export default taxi_order_sentSchema;
