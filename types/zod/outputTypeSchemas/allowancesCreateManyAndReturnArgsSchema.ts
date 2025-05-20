import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesCreateManyInputSchema } from '../inputTypeSchemas/allowancesCreateManyInputSchema'

export const allowancesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.allowancesCreateManyAndReturnArgs> = z.object({
  data: z.union([ allowancesCreateManyInputSchema,allowancesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default allowancesCreateManyAndReturnArgsSchema;
