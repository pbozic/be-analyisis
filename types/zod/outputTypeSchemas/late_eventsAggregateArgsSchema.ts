import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsWhereInputSchema } from '../inputTypeSchemas/late_eventsWhereInputSchema'
import { late_eventsOrderByWithRelationInputSchema } from '../inputTypeSchemas/late_eventsOrderByWithRelationInputSchema'
import { late_eventsWhereUniqueInputSchema } from '../inputTypeSchemas/late_eventsWhereUniqueInputSchema'

export const late_eventsAggregateArgsSchema: z.ZodType<Prisma.late_eventsAggregateArgs> = z.object({
  where: late_eventsWhereInputSchema.optional(),
  orderBy: z.union([ late_eventsOrderByWithRelationInputSchema.array(),late_eventsOrderByWithRelationInputSchema ]).optional(),
  cursor: late_eventsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default late_eventsAggregateArgsSchema;
