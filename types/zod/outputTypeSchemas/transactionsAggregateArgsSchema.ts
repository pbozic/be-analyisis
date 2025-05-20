import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsWhereInputSchema } from '../inputTypeSchemas/transactionsWhereInputSchema'
import { transactionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/transactionsOrderByWithRelationInputSchema'
import { transactionsWhereUniqueInputSchema } from '../inputTypeSchemas/transactionsWhereUniqueInputSchema'

export const transactionsAggregateArgsSchema: z.ZodType<Prisma.transactionsAggregateArgs> = z.object({
  where: transactionsWhereInputSchema.optional(),
  orderBy: z.union([ transactionsOrderByWithRelationInputSchema.array(),transactionsOrderByWithRelationInputSchema ]).optional(),
  cursor: transactionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default transactionsAggregateArgsSchema;
