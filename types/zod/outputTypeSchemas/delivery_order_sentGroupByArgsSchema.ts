import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentWhereInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereInputSchema'
import { delivery_order_sentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/delivery_order_sentOrderByWithAggregationInputSchema'
import { Delivery_order_sentScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_order_sentScalarFieldEnumSchema'
import { delivery_order_sentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/delivery_order_sentScalarWhereWithAggregatesInputSchema'

export const delivery_order_sentGroupByArgsSchema: z.ZodType<Prisma.delivery_order_sentGroupByArgs> = z.object({
  where: delivery_order_sentWhereInputSchema.optional(),
  orderBy: z.union([ delivery_order_sentOrderByWithAggregationInputSchema.array(),delivery_order_sentOrderByWithAggregationInputSchema ]).optional(),
  by: Delivery_order_sentScalarFieldEnumSchema.array(),
  having: delivery_order_sentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_order_sentGroupByArgsSchema;
