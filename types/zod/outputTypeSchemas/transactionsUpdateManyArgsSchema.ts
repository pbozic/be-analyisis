import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/transactionsUpdateManyMutationInputSchema'
import { transactionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/transactionsUncheckedUpdateManyInputSchema'
import { transactionsWhereInputSchema } from '../inputTypeSchemas/transactionsWhereInputSchema'

export const transactionsUpdateManyArgsSchema: z.ZodType<Prisma.transactionsUpdateManyArgs> = z.object({
  data: z.union([ transactionsUpdateManyMutationInputSchema,transactionsUncheckedUpdateManyInputSchema ]),
  where: transactionsWhereInputSchema.optional(),
}).strict() ;

export default transactionsUpdateManyArgsSchema;
