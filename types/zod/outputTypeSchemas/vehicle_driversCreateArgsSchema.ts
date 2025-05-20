import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversIncludeSchema } from '../inputTypeSchemas/vehicle_driversIncludeSchema'
import { vehicle_driversCreateInputSchema } from '../inputTypeSchemas/vehicle_driversCreateInputSchema'
import { vehicle_driversUncheckedCreateInputSchema } from '../inputTypeSchemas/vehicle_driversUncheckedCreateInputSchema'
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

export const vehicle_driversCreateArgsSchema: z.ZodType<Prisma.vehicle_driversCreateArgs> = z.object({
  select: vehicle_driversSelectSchema.optional(),
  include: vehicle_driversIncludeSchema.optional(),
  data: z.union([ vehicle_driversCreateInputSchema,vehicle_driversUncheckedCreateInputSchema ]),
}).strict() ;

export default vehicle_driversCreateArgsSchema;
