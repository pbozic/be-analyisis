import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereInputSchema'
import { delivery_driver_history_locationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsOrderByWithAggregationInputSchema'
import { Delivery_driver_history_locationsScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_driver_history_locationsScalarFieldEnumSchema'
import { delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema'

export const delivery_driver_history_locationsGroupByArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsGroupByArgs> = z.object({
  where: delivery_driver_history_locationsWhereInputSchema.optional(),
  orderBy: z.union([ delivery_driver_history_locationsOrderByWithAggregationInputSchema.array(),delivery_driver_history_locationsOrderByWithAggregationInputSchema ]).optional(),
  by: Delivery_driver_history_locationsScalarFieldEnumSchema.array(),
  having: delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_driver_history_locationsGroupByArgsSchema;
