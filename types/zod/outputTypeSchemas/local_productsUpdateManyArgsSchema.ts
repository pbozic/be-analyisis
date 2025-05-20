import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsUpdateManyMutationInputSchema } from '../inputTypeSchemas/local_productsUpdateManyMutationInputSchema'
import { local_productsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/local_productsUncheckedUpdateManyInputSchema'
import { local_productsWhereInputSchema } from '../inputTypeSchemas/local_productsWhereInputSchema'

export const local_productsUpdateManyArgsSchema: z.ZodType<Prisma.local_productsUpdateManyArgs> = z.object({
  data: z.union([ local_productsUpdateManyMutationInputSchema,local_productsUncheckedUpdateManyInputSchema ]),
  where: local_productsWhereInputSchema.optional(),
}).strict() ;

export default local_productsUpdateManyArgsSchema;
