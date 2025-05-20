import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesUpdateManyMutationInputSchema } from '../inputTypeSchemas/local_pricesUpdateManyMutationInputSchema'
import { local_pricesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/local_pricesUncheckedUpdateManyInputSchema'
import { local_pricesWhereInputSchema } from '../inputTypeSchemas/local_pricesWhereInputSchema'

export const local_pricesUpdateManyArgsSchema: z.ZodType<Prisma.local_pricesUpdateManyArgs> = z.object({
  data: z.union([ local_pricesUpdateManyMutationInputSchema,local_pricesUncheckedUpdateManyInputSchema ]),
  where: local_pricesWhereInputSchema.optional(),
}).strict() ;

export default local_pricesUpdateManyArgsSchema;
