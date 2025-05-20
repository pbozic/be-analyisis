import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesWhereInputSchema } from '../inputTypeSchemas/allowancesWhereInputSchema'
import { allowancesOrderByWithRelationInputSchema } from '../inputTypeSchemas/allowancesOrderByWithRelationInputSchema'
import { allowancesWhereUniqueInputSchema } from '../inputTypeSchemas/allowancesWhereUniqueInputSchema'

export const allowancesAggregateArgsSchema: z.ZodType<Prisma.allowancesAggregateArgs> = z.object({
  where: allowancesWhereInputSchema.optional(),
  orderBy: z.union([ allowancesOrderByWithRelationInputSchema.array(),allowancesOrderByWithRelationInputSchema ]).optional(),
  cursor: allowancesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default allowancesAggregateArgsSchema;
