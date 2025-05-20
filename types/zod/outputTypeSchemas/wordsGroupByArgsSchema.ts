import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsWhereInputSchema } from '../inputTypeSchemas/wordsWhereInputSchema'
import { wordsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/wordsOrderByWithAggregationInputSchema'
import { WordsScalarFieldEnumSchema } from '../inputTypeSchemas/WordsScalarFieldEnumSchema'
import { wordsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/wordsScalarWhereWithAggregatesInputSchema'

export const wordsGroupByArgsSchema: z.ZodType<Prisma.wordsGroupByArgs> = z.object({
  where: wordsWhereInputSchema.optional(),
  orderBy: z.union([ wordsOrderByWithAggregationInputSchema.array(),wordsOrderByWithAggregationInputSchema ]).optional(),
  by: WordsScalarFieldEnumSchema.array(),
  having: wordsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default wordsGroupByArgsSchema;
