import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersWhereInputSchema } from '../inputTypeSchemas/taxi_ordersWhereInputSchema'
import { taxi_ordersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/taxi_ordersOrderByWithAggregationInputSchema'
import { Taxi_ordersScalarFieldEnumSchema } from '../inputTypeSchemas/Taxi_ordersScalarFieldEnumSchema'
import { taxi_ordersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/taxi_ordersScalarWhereWithAggregatesInputSchema'

export const taxi_ordersGroupByArgsSchema: z.ZodType<Prisma.taxi_ordersGroupByArgs> = z.object({
  where: taxi_ordersWhereInputSchema.optional(),
  orderBy: z.union([ taxi_ordersOrderByWithAggregationInputSchema.array(),taxi_ordersOrderByWithAggregationInputSchema ]).optional(),
  by: Taxi_ordersScalarFieldEnumSchema.array(),
  having: taxi_ordersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default taxi_ordersGroupByArgsSchema;
