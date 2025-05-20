import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsCreateManyInputSchema } from '../inputTypeSchemas/flagsCreateManyInputSchema'

export const flagsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.flagsCreateManyAndReturnArgs> = z.object({
  data: z.union([ flagsCreateManyInputSchema,flagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default flagsCreateManyAndReturnArgsSchema;
