import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsIncludeSchema } from '../inputTypeSchemas/vehicle_specificationsIncludeSchema'
import { vehicle_specificationsWhereUniqueInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereUniqueInputSchema'
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const vehicle_specificationsSelectSchema: z.ZodType<Prisma.vehicle_specificationsSelect> = z.object({
  vehicle_specification_id: z.boolean().optional(),
  class: z.boolean().optional(),
  category: z.boolean().optional(),
  people: z.boolean().optional(),
  start_cost: z.boolean().optional(),
  per_kilometre: z.boolean().optional(),
  per_minute: z.boolean().optional(),
  vehicle_id: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
}).strict()

export const vehicle_specificationsDeleteArgsSchema: z.ZodType<Prisma.vehicle_specificationsDeleteArgs> = z.object({
  select: vehicle_specificationsSelectSchema.optional(),
  include: vehicle_specificationsIncludeSchema.optional(),
  where: vehicle_specificationsWhereUniqueInputSchema,
}).strict() ;

export default vehicle_specificationsDeleteArgsSchema;
