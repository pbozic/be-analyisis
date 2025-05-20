import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentWhereInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereInputSchema'
import { delivery_order_sentOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_order_sentOrderByWithRelationInputSchema'
import { delivery_order_sentWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereUniqueInputSchema'

export const delivery_order_sentAggregateArgsSchema: z.ZodType<Prisma.delivery_order_sentAggregateArgs> = z.object({
  where: delivery_order_sentWhereInputSchema.optional(),
  orderBy: z.union([ delivery_order_sentOrderByWithRelationInputSchema.array(),delivery_order_sentOrderByWithRelationInputSchema ]).optional(),
  cursor: delivery_order_sentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_order_sentAggregateArgsSchema;
