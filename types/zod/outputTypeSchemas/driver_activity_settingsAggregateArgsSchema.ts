import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_settingsWhereInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereInputSchema'
import { driver_activity_settingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_activity_settingsOrderByWithRelationInputSchema'
import { driver_activity_settingsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_settingsWhereUniqueInputSchema'

export const driver_activity_settingsAggregateArgsSchema: z.ZodType<Prisma.driver_activity_settingsAggregateArgs> = z.object({
  where: driver_activity_settingsWhereInputSchema.optional(),
  orderBy: z.union([ driver_activity_settingsOrderByWithRelationInputSchema.array(),driver_activity_settingsOrderByWithRelationInputSchema ]).optional(),
  cursor: driver_activity_settingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_activity_settingsAggregateArgsSchema;
