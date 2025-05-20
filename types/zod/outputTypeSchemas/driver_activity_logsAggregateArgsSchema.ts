import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsWhereInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereInputSchema'
import { driver_activity_logsOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_activity_logsOrderByWithRelationInputSchema'
import { driver_activity_logsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereUniqueInputSchema'

export const driver_activity_logsAggregateArgsSchema: z.ZodType<Prisma.driver_activity_logsAggregateArgs> = z.object({
  where: driver_activity_logsWhereInputSchema.optional(),
  orderBy: z.union([ driver_activity_logsOrderByWithRelationInputSchema.array(),driver_activity_logsOrderByWithRelationInputSchema ]).optional(),
  cursor: driver_activity_logsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_activity_logsAggregateArgsSchema;
