import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersWhereInputSchema } from '../inputTypeSchemas/business_usersWhereInputSchema'
import { business_usersOrderByWithRelationInputSchema } from '../inputTypeSchemas/business_usersOrderByWithRelationInputSchema'
import { business_usersWhereUniqueInputSchema } from '../inputTypeSchemas/business_usersWhereUniqueInputSchema'

export const business_usersAggregateArgsSchema: z.ZodType<Prisma.business_usersAggregateArgs> = z.object({
  where: business_usersWhereInputSchema.optional(),
  orderBy: z.union([ business_usersOrderByWithRelationInputSchema.array(),business_usersOrderByWithRelationInputSchema ]).optional(),
  cursor: business_usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default business_usersAggregateArgsSchema;
