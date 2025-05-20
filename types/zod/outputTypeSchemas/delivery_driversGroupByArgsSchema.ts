import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversWhereInputSchema } from '../inputTypeSchemas/delivery_driversWhereInputSchema'
import { delivery_driversOrderByWithAggregationInputSchema } from '../inputTypeSchemas/delivery_driversOrderByWithAggregationInputSchema'
import { Delivery_driversScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_driversScalarFieldEnumSchema'
import { delivery_driversScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/delivery_driversScalarWhereWithAggregatesInputSchema'

export const delivery_driversGroupByArgsSchema: z.ZodType<Prisma.delivery_driversGroupByArgs> = z.object({
  where: delivery_driversWhereInputSchema.optional(),
  orderBy: z.union([ delivery_driversOrderByWithAggregationInputSchema.array(),delivery_driversOrderByWithAggregationInputSchema ]).optional(),
  by: Delivery_driversScalarFieldEnumSchema.array(),
  having: delivery_driversScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_driversGroupByArgsSchema;
