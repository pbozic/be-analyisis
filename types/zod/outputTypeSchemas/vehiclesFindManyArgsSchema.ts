import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesIncludeSchema } from '../inputTypeSchemas/vehiclesIncludeSchema'
import { vehiclesWhereInputSchema } from '../inputTypeSchemas/vehiclesWhereInputSchema'
import { vehiclesOrderByWithRelationInputSchema } from '../inputTypeSchemas/vehiclesOrderByWithRelationInputSchema'
import { vehiclesWhereUniqueInputSchema } from '../inputTypeSchemas/vehiclesWhereUniqueInputSchema'
import { VehiclesScalarFieldEnumSchema } from '../inputTypeSchemas/VehiclesScalarFieldEnumSchema'
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { vehicle_driversFindManyArgsSchema } from "../outputTypeSchemas/vehicle_driversFindManyArgsSchema"
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { vehicle_specificationsArgsSchema } from "../outputTypeSchemas/vehicle_specificationsArgsSchema"
import { taxi_ordersFindManyArgsSchema } from "../outputTypeSchemas/taxi_ordersFindManyArgsSchema"
import { delivery_ordersFindManyArgsSchema } from "../outputTypeSchemas/delivery_ordersFindManyArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { VehiclesCountOutputTypeArgsSchema } from "../outputTypeSchemas/VehiclesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const vehiclesSelectSchema: z.ZodType<Prisma.vehiclesSelect> = z.object({
  vehicle_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  active: z.boolean().optional(),
  class: z.boolean().optional(),
  category: z.boolean().optional(),
  make: z.boolean().optional(),
  model: z.boolean().optional(),
  color: z.boolean().optional(),
  license_plate: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  delivery_driver_id: z.boolean().optional(),
  vehicle_specification_id: z.boolean().optional(),
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  drivers: z.union([z.boolean(),z.lazy(() => vehicle_driversFindManyArgsSchema)]).optional(),
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  vehicle_specification: z.union([z.boolean(),z.lazy(() => vehicle_specificationsArgsSchema)]).optional(),
  taxi_orders: z.union([z.boolean(),z.lazy(() => taxi_ordersFindManyArgsSchema)]).optional(),
  delivery_orders: z.union([z.boolean(),z.lazy(() => delivery_ordersFindManyArgsSchema)]).optional(),
  current_driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VehiclesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const vehiclesFindManyArgsSchema: z.ZodType<Prisma.vehiclesFindManyArgs> = z.object({
  select: vehiclesSelectSchema.optional(),
  include: vehiclesIncludeSchema.optional(),
  where: vehiclesWhereInputSchema.optional(),
  orderBy: z.union([ vehiclesOrderByWithRelationInputSchema.array(),vehiclesOrderByWithRelationInputSchema ]).optional(),
  cursor: vehiclesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VehiclesScalarFieldEnumSchema,VehiclesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default vehiclesFindManyArgsSchema;
