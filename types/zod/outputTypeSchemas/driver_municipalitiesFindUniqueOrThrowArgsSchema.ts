import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesIncludeSchema } from '../inputTypeSchemas/driver_municipalitiesIncludeSchema'
import { driver_municipalitiesWhereUniqueInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereUniqueInputSchema'
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { municipalitiesArgsSchema } from "../outputTypeSchemas/municipalitiesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const driver_municipalitiesSelectSchema: z.ZodType<Prisma.driver_municipalitiesSelect> = z.object({
  driver_municipalities_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  municipalities_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  drivers: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  municipalities: z.union([z.boolean(),z.lazy(() => municipalitiesArgsSchema)]).optional(),
}).strict()

export const driver_municipalitiesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.driver_municipalitiesFindUniqueOrThrowArgs> = z.object({
  select: driver_municipalitiesSelectSchema.optional(),
  include: driver_municipalitiesIncludeSchema.optional(),
  where: driver_municipalitiesWhereUniqueInputSchema,
}).strict() ;

export default driver_municipalitiesFindUniqueOrThrowArgsSchema;
