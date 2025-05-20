import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentWhereInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereInputSchema'
import { taxi_order_sentOrderByWithRelationInputSchema } from '../inputTypeSchemas/taxi_order_sentOrderByWithRelationInputSchema'
import { taxi_order_sentWhereUniqueInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereUniqueInputSchema'

export const taxi_order_sentAggregateArgsSchema: z.ZodType<Prisma.taxi_order_sentAggregateArgs> = z.object({
  where: taxi_order_sentWhereInputSchema.optional(),
  orderBy: z.union([ taxi_order_sentOrderByWithRelationInputSchema.array(),taxi_order_sentOrderByWithRelationInputSchema ]).optional(),
  cursor: taxi_order_sentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default taxi_order_sentAggregateArgsSchema;
