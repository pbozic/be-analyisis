import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsWhereInputSchema } from '../inputTypeSchemas/business_teamsWhereInputSchema'
import { business_teamsOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_teamsOrderByWithRelationInputSchema'
import { business_teamsWhereUniqueInputSchema } from '../inputTypeSchemas/business_teamsWhereUniqueInputSchema'

export const business_teamsAggregateArgsSchema: z.ZodType<Prisma.business_teamsAggregateArgs> = z.object({
  where: business_teamsWhereInputSchema.optional(),
  orderBy: z.union([ business_teamsOrderByWithRelationInputSchema.array(),business_teamsOrderByWithRelationInputSchema ]).optional(),
  cursor: business_teamsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default business_teamsAggregateArgsSchema;
