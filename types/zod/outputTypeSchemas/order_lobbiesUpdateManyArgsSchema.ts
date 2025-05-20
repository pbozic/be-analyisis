import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/order_lobbiesUpdateManyMutationInputSchema'
import { order_lobbiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/order_lobbiesUncheckedUpdateManyInputSchema'
import { order_lobbiesWhereInputSchema } from '../inputTypeSchemas/order_lobbiesWhereInputSchema'

export const order_lobbiesUpdateManyArgsSchema: z.ZodType<Prisma.order_lobbiesUpdateManyArgs> = z.object({
  data: z.union([ order_lobbiesUpdateManyMutationInputSchema,order_lobbiesUncheckedUpdateManyInputSchema ]),
  where: order_lobbiesWhereInputSchema.optional(),
}).strict() ;

export default order_lobbiesUpdateManyArgsSchema;
