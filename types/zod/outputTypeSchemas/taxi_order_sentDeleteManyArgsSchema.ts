import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentWhereInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereInputSchema'

export const taxi_order_sentDeleteManyArgsSchema: z.ZodType<Prisma.taxi_order_sentDeleteManyArgs> = z.object({
  where: taxi_order_sentWhereInputSchema.optional(),
}).strict() ;

export default taxi_order_sentDeleteManyArgsSchema;
