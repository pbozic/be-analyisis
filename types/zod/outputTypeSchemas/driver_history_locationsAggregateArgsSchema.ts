import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereInputSchema'
import { driver_history_locationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_history_locationsOrderByWithRelationInputSchema'
import { driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereUniqueInputSchema'

export const driver_history_locationsAggregateArgsSchema: z.ZodType<Prisma.driver_history_locationsAggregateArgs> = z.object({
  where: driver_history_locationsWhereInputSchema.optional(),
  orderBy: z.union([ driver_history_locationsOrderByWithRelationInputSchema.array(),driver_history_locationsOrderByWithRelationInputSchema ]).optional(),
  cursor: driver_history_locationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_history_locationsAggregateArgsSchema;
