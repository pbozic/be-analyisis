import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesCreateManyInputSchema } from '../inputTypeSchemas/vehiclesCreateManyInputSchema'

export const vehiclesCreateManyArgsSchema: z.ZodType<Prisma.vehiclesCreateManyArgs> = z.object({
  data: z.union([ vehiclesCreateManyInputSchema,vehiclesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default vehiclesCreateManyArgsSchema;
