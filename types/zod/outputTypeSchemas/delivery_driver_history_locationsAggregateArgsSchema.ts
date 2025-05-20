import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereInputSchema'
import { delivery_driver_history_locationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsOrderByWithRelationInputSchema'
import { delivery_driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereUniqueInputSchema'

export const delivery_driver_history_locationsAggregateArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsAggregateArgs> = z.object({
  where: delivery_driver_history_locationsWhereInputSchema.optional(),
  orderBy: z.union([ delivery_driver_history_locationsOrderByWithRelationInputSchema.array(),delivery_driver_history_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: delivery_driver_history_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_driver_history_locationsAggregateArgsSchema;
