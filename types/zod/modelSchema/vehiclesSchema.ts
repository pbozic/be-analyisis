import { z } from 'zod';
import { VEHICLE_CLASSSchema } from '../inputTypeSchemas/VEHICLE_CLASSSchema'
import { VEHICLE_CATEGORYSchema } from '../inputTypeSchemas/VEHICLE_CATEGORYSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { vehicle_driversWithRelationsSchema } from './vehicle_driversSchema'
import type { vehicle_driversWithRelations } from './vehicle_driversSchema'
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema'
import type { delivery_driversWithRelations } from './delivery_driversSchema'
import { vehicle_specificationsWithRelationsSchema } from './vehicle_specificationsSchema'
import type { vehicle_specificationsWithRelations } from './vehicle_specificationsSchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { driversWithRelationsSchema } from './driversSchema'
import type { driversWithRelations } from './driversSchema'

/////////////////////////////////////////
// VEHICLES SCHEMA
/////////////////////////////////////////

export const vehiclesSchema = z.object({
  class: VEHICLE_CLASSSchema.nullable(),
  category: VEHICLE_CATEGORYSchema.nullable(),
  vehicle_id: z.string().uuid(),
  business_id: z.string().nullable(),
  active: z.boolean().nullable(),
  make: z.string().nullable(),
  model: z.string().nullable(),
  color: z.string().nullable(),
  license_plate: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  delivery_driver_id: z.string().nullable(),
  vehicle_specification_id: z.string().nullable(),
})

export type vehicles = z.infer<typeof vehiclesSchema>

/////////////////////////////////////////
// VEHICLES RELATION SCHEMA
/////////////////////////////////////////

export type vehiclesRelations = {
  documents: documentsWithRelations[];
  drivers: vehicle_driversWithRelations[];
  delivery_driver?: delivery_driversWithRelations | null;
  vehicle_specification?: vehicle_specificationsWithRelations | null;
  taxi_orders: taxi_ordersWithRelations[];
  delivery_orders: delivery_ordersWithRelations[];
  current_driver?: driversWithRelations | null;
};

export type vehiclesWithRelations = z.infer<typeof vehiclesSchema> & vehiclesRelations

export const vehiclesWithRelationsSchema: z.ZodType<vehiclesWithRelations> = vehiclesSchema.merge(z.object({
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  drivers: z.lazy(() => vehicle_driversWithRelationsSchema).array(),
  delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
  vehicle_specification: z.lazy(() => vehicle_specificationsWithRelationsSchema).nullable(),
  taxi_orders: z.lazy(() => taxi_ordersWithRelationsSchema).array(),
  delivery_orders: z.lazy(() => delivery_ordersWithRelationsSchema).array(),
  current_driver: z.lazy(() => driversWithRelationsSchema).nullable(),
}))

export default vehiclesSchema;
