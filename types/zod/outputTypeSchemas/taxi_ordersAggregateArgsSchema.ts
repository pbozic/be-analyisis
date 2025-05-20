import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersWhereInputSchema } from '../inputTypeSchemas/taxi_ordersWhereInputSchema'
import { taxi_ordersOrderByWithRelationInputSchema } from '../inputTypeSchemas/taxi_ordersOrderByWithRelationInputSchema'
import { taxi_ordersWhereUniqueInputSchema } from '../inputTypeSchemas/taxi_ordersWhereUniqueInputSchema'

export const taxi_ordersAggregateArgsSchema: z.ZodType<Prisma.taxi_ordersAggregateArgs> = z.object({
  where: taxi_ordersWhereInputSchema.optional(),
  orderBy: z.union([ taxi_ordersOrderByWithRelationInputSchema.array(),taxi_ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: taxi_ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default taxi_ordersAggregateArgsSchema;
