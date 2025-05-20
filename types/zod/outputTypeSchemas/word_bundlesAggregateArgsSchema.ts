import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesWhereInputSchema } from '../inputTypeSchemas/word_bundlesWhereInputSchema'
import { word_bundlesOrderByWithRelationInputSchema } from '../inputTypeSchemas/word_bundlesOrderByWithRelationInputSchema'
import { word_bundlesWhereUniqueInputSchema } from '../inputTypeSchemas/word_bundlesWhereUniqueInputSchema'

export const word_bundlesAggregateArgsSchema: z.ZodType<Prisma.word_bundlesAggregateArgs> = z.object({
  where: word_bundlesWhereInputSchema.optional(),
  orderBy: z.union([ word_bundlesOrderByWithRelationInputSchema.array(),word_bundlesOrderByWithRelationInputSchema ]).optional(),
  cursor: word_bundlesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default word_bundlesAggregateArgsSchema;
