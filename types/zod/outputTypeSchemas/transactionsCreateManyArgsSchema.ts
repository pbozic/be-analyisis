import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsCreateManyInputSchema } from '../inputTypeSchemas/transactionsCreateManyInputSchema'

export const transactionsCreateManyArgsSchema: z.ZodType<Prisma.transactionsCreateManyArgs> = z.object({
  data: z.union([ transactionsCreateManyInputSchema,transactionsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default transactionsCreateManyArgsSchema;
