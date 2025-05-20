import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesCreateManyInputSchema } from '../inputTypeSchemas/municipalitiesCreateManyInputSchema'

export const municipalitiesCreateManyArgsSchema: z.ZodType<Prisma.municipalitiesCreateManyArgs> = z.object({
  data: z.union([ municipalitiesCreateManyInputSchema,municipalitiesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default municipalitiesCreateManyArgsSchema;
