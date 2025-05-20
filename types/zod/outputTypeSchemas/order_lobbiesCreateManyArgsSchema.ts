import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesCreateManyInputSchema } from '../inputTypeSchemas/order_lobbiesCreateManyInputSchema'

export const order_lobbiesCreateManyArgsSchema: z.ZodType<Prisma.order_lobbiesCreateManyArgs> = z.object({
  data: z.union([ order_lobbiesCreateManyInputSchema,order_lobbiesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default order_lobbiesCreateManyArgsSchema;
