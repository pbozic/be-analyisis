import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersWhereInputSchema } from '../inputTypeSchemas/delivery_ordersWhereInputSchema'
import { delivery_ordersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/delivery_ordersOrderByWithAggregationInputSchema'
import { Delivery_ordersScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_ordersScalarFieldEnumSchema'
import { delivery_ordersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/delivery_ordersScalarWhereWithAggregatesInputSchema'

export const delivery_ordersGroupByArgsSchema: z.ZodType<Prisma.delivery_ordersGroupByArgs> = z.object({
  where: delivery_ordersWhereInputSchema.optional(),
  orderBy: z.union([ delivery_ordersOrderByWithAggregationInputSchema.array(),delivery_ordersOrderByWithAggregationInputSchema ]).optional(),
  by: Delivery_ordersScalarFieldEnumSchema.array(),
  having: delivery_ordersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_ordersGroupByArgsSchema;
