import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsWhereInputSchema } from '../inputTypeSchemas/transactionsWhereInputSchema'

export const transactionsDeleteManyArgsSchema: z.ZodType<Prisma.transactionsDeleteManyArgs> = z.object({
  where: transactionsWhereInputSchema.optional(),
}).strict() ;

export default transactionsDeleteManyArgsSchema;
