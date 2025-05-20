import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversIncludeSchema } from '../inputTypeSchemas/vehicle_driversIncludeSchema'
import { vehicle_driversWhereInputSchema } from '../inputTypeSchemas/vehicle_driversWhereInputSchema'
import { vehicle_driversOrderByWithRelationInputSchema } from '../inputTypeSchemas/vehicle_driversOrderByWithRelationInputSchema'
import { vehicle_driversWhereUniqueInputSchema } from '../inputTypeSchemas/vehicle_driversWhereUniqueInputSchema'
import { Vehicle_driversScalarFieldEnumSchema } from '../inputTypeSchemas/Vehicle_driversScalarFieldEnumSchema'
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const vehicle_driversSelectSchema: z.ZodType<Prisma.vehicle_driversSelect> = z.object({
  vehicle_drivers_id: z.boolean().optional(),
  vehicle_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  can_drive: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export const vehicle_driversFindManyArgsSchema: z.ZodType<Prisma.vehicle_driversFindManyArgs> = z.object({
  select: vehicle_driversSelectSchema.optional(),
  include: vehicle_driversIncludeSchema.optional(),
  where: vehicle_driversWhereInputSchema.optional(),
  orderBy: z.union([ vehicle_driversOrderByWithRelationInputSchema.array(),vehicle_driversOrderByWithRelationInputSchema ]).optional(),
  cursor: vehicle_driversWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Vehicle_driversScalarFieldEnumSchema,Vehicle_driversScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default vehicle_driversFindManyArgsSchema;
