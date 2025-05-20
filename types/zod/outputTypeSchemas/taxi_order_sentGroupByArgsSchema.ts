import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentWhereInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereInputSchema'
import { taxi_order_sentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/taxi_order_sentOrderByWithAggregationInputSchema'
import { Taxi_order_sentScalarFieldEnumSchema } from '../inputTypeSchemas/Taxi_order_sentScalarFieldEnumSchema'
import { taxi_order_sentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/taxi_order_sentScalarWhereWithAggregatesInputSchema'

export const taxi_order_sentGroupByArgsSchema: z.ZodType<Prisma.taxi_order_sentGroupByArgs> = z.object({
  where: taxi_order_sentWhereInputSchema.optional(),
  orderBy: z.union([ taxi_order_sentOrderByWithAggregationInputSchema.array(),taxi_order_sentOrderByWithAggregationInputSchema ]).optional(),
  by: Taxi_order_sentScalarFieldEnumSchema.array(),
  having: taxi_order_sentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default taxi_order_sentGroupByArgsSchema;
