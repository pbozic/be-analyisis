import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesWhereInputSchema } from '../inputTypeSchemas/order_lobbiesWhereInputSchema'

export const order_lobbiesDeleteManyArgsSchema: z.ZodType<Prisma.order_lobbiesDeleteManyArgs> = z.object({
  where: order_lobbiesWhereInputSchema.optional(),
}).strict() ;

export default order_lobbiesDeleteManyArgsSchema;
