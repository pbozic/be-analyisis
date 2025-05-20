import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesCreateManyInputSchema } from '../inputTypeSchemas/driver_municipalitiesCreateManyInputSchema'

export const driver_municipalitiesCreateManyArgsSchema: z.ZodType<Prisma.driver_municipalitiesCreateManyArgs> = z.object({
  data: z.union([ driver_municipalitiesCreateManyInputSchema,driver_municipalitiesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default driver_municipalitiesCreateManyArgsSchema;
