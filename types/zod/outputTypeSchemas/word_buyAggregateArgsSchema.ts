import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyWhereInputSchema } from '../inputTypeSchemas/word_buyWhereInputSchema'
import { word_buyOrderByWithRelationInputSchema } from '../inputTypeSchemas/word_buyOrderByWithRelationInputSchema'
import { word_buyWhereUniqueInputSchema } from '../inputTypeSchemas/word_buyWhereUniqueInputSchema'

export const word_buyAggregateArgsSchema: z.ZodType<Prisma.word_buyAggregateArgs> = z.object({
  where: word_buyWhereInputSchema.optional(),
  orderBy: z.union([ word_buyOrderByWithRelationInputSchema.array(),word_buyOrderByWithRelationInputSchema ]).optional(),
  cursor: word_buyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default word_buyAggregateArgsSchema;
