import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/driver_history_locationsWhereInputSchema'
import { driver_history_locationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/driver_history_locationsOrderByWithAggregationInputSchema'
import { Driver_history_locationsScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_history_locationsScalarFieldEnumSchema'
import { driver_history_locationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/driver_history_locationsScalarWhereWithAggregatesInputSchema'

export const driver_history_locationsGroupByArgsSchema: z.ZodType<Prisma.driver_history_locationsGroupByArgs> = z.object({
  where: driver_history_locationsWhereInputSchema.optional(),
  orderBy: z.union([ driver_history_locationsOrderByWithAggregationInputSchema.array(),driver_history_locationsOrderByWithAggregationInputSchema ]).optional(),
  by: Driver_history_locationsScalarFieldEnumSchema.array(),
  having: driver_history_locationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_history_locationsGroupByArgsSchema;
