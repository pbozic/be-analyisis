import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { vehicle_driversWithRelationsSchema } from './vehicle_driversSchema'
import type { vehicle_driversWithRelations } from './vehicle_driversSchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { taxi_order_sentWithRelationsSchema } from './taxi_order_sentSchema'
import type { taxi_order_sentWithRelations } from './taxi_order_sentSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { delivery_order_sentWithRelationsSchema } from './delivery_order_sentSchema'
import type { delivery_order_sentWithRelations } from './delivery_order_sentSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { driver_history_locationsWithRelationsSchema } from './driver_history_locationsSchema'
import type { driver_history_locationsWithRelations } from './driver_history_locationsSchema'
import { driver_municipalitiesWithRelationsSchema } from './driver_municipalitiesSchema'
import type { driver_municipalitiesWithRelations } from './driver_municipalitiesSchema'
import { vehiclesWithRelationsSchema } from './vehiclesSchema'
import type { vehiclesWithRelations } from './vehiclesSchema'
import { driver_activity_logsWithRelationsSchema } from './driver_activity_logsSchema'
import type { driver_activity_logsWithRelations } from './driver_activity_logsSchema'

/////////////////////////////////////////
// DRIVERS SCHEMA
/////////////////////////////////////////

export const driversSchema = z.object({
  driver_id: z.string().uuid(),
  business_id: z.string().nullable(),
  online: z.boolean().nullable(),
  on_order: z.boolean().nullable(),
  working_hours: JsonValueSchema.nullable(),
  ride_requirements: JsonValueSchema.nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  user_id: z.string().nullable(),
  current_vehicle_id: z.string().nullable(),
  last_used_vehicle_id: z.string().nullable(),
  location: JsonValueSchema.nullable(),
  delivery_timeline: JsonValueSchema.nullable(),
  last_ping_at: z.coerce.date(),
  is_inactive: z.boolean().nullable(),
  transfer_requirements: JsonValueSchema.nullable(),
  regions: z.string().array(),
  handles_taxi_orders: z.boolean().nullable(),
  handles_transfer_orders: z.boolean().nullable(),
  handles_delivery_orders: z.boolean().nullable(),
  taxi_orders_toggled: z.boolean().nullable(),
  transfer_orders_toggled: z.boolean().nullable(),
  delivery_orders_toggled: z.boolean().nullable(),
  partner_cash_balance: z.number().nullable(),
  come_to_work_last_sent_at: z.coerce.date().nullable(),
})

export type drivers = z.infer<typeof driversSchema>

/////////////////////////////////////////
// DRIVERS RELATION SCHEMA
/////////////////////////////////////////

export type driversRelations = {
  user?: usersWithRelations | null;
  vehicles: vehicle_driversWithRelations[];
  orders: taxi_ordersWithRelations[];
  received_orders: taxi_order_sentWithRelations[];
  delivery_orders: delivery_ordersWithRelations[];
  received_delivery_orders: delivery_order_sentWithRelations[];
  documents: documentsWithRelations[];
  driver_history_locations: driver_history_locationsWithRelations[];
  driver_municipalities: driver_municipalitiesWithRelations[];
  current_vehicle?: vehiclesWithRelations | null;
  activity_logs: driver_activity_logsWithRelations[];
};

export type driversWithRelations = Omit<z.infer<typeof driversSchema>, "working_hours" | "ride_requirements" | "location" | "delivery_timeline" | "transfer_requirements"> & {
  working_hours?: JsonValueType | null;
  ride_requirements?: JsonValueType | null;
  location?: JsonValueType | null;
  delivery_timeline?: JsonValueType | null;
  transfer_requirements?: JsonValueType | null;
} & driversRelations

export const driversWithRelationsSchema: z.ZodType<driversWithRelations> = driversSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema).nullable(),
  vehicles: z.lazy(() => vehicle_driversWithRelationsSchema).array(),
  orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
  received_orders: z.lazy(() => taxi_order_sentWithRelationsSchema).array(),
  delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).array(),
  received_delivery_orders: z.lazy(() => delivery_order_sentWithRelationsSchema).array(),
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  driver_history_locations: z.lazy(() => driver_history_locationsWithRelationsSchema).array(),
  driver_municipalities: z.lazy(() => driver_municipalitiesWithRelationsSchema).array(),
  current_vehicle: z.lazy(() => vehiclesWithRelationsSchema).nullable(),
  activity_logs: z.lazy(() => driver_activity_logsWithRelationsSchema).array(),
}))

export default driversSchema;
