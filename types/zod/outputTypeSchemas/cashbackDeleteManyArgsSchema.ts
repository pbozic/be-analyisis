import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackWhereInputSchema } from '../inputTypeSchemas/cashbackWhereInputSchema'

export const cashbackDeleteManyArgsSchema: z.ZodType<Prisma.cashbackDeleteManyArgs> = z.object({
  where: cashbackWhereInputSchema.optional(),
}).strict() ;

export default cashbackDeleteManyArgsSchema;
