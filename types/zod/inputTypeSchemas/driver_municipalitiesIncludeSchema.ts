import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { municipalitiesArgsSchema } from "../outputTypeSchemas/municipalitiesArgsSchema"

export const driver_municipalitiesIncludeSchema: z.ZodType<Prisma.driver_municipalitiesInclude> = z.object({
  drivers: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  municipalities: z.union([z.boolean(),z.lazy(() => municipalitiesArgsSchema)]).optional(),
}).strict()

export default driver_municipalitiesIncludeSchema;
