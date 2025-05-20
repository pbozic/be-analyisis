import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesCreateManyInputSchema } from '../inputTypeSchemas/vehiclesCreateManyInputSchema'

export const vehiclesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.vehiclesCreateManyAndReturnArgs> = z.object({
  data: z.union([ vehiclesCreateManyInputSchema,vehiclesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default vehiclesCreateManyAndReturnArgsSchema;
