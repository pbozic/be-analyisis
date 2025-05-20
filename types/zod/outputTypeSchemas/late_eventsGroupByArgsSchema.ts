import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsWhereInputSchema } from '../inputTypeSchemas/late_eventsWhereInputSchema'
import { late_eventsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/late_eventsOrderByWithAggregationInputSchema'
import { Late_eventsScalarFieldEnumSchema } from '../inputTypeSchemas/Late_eventsScalarFieldEnumSchema'
import { late_eventsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/late_eventsScalarWhereWithAggregatesInputSchema'

export const late_eventsGroupByArgsSchema: z.ZodType<Prisma.late_eventsGroupByArgs> = z.object({
  where: late_eventsWhereInputSchema.optional(),
  orderBy: z.union([ late_eventsOrderByWithAggregationInputSchema.array(),late_eventsOrderByWithAggregationInputSchema ]).optional(),
  by: Late_eventsScalarFieldEnumSchema.array(),
  having: late_eventsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default late_eventsGroupByArgsSchema;
