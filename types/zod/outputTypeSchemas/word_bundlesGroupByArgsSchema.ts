import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesWhereInputSchema } from '../inputTypeSchemas/word_bundlesWhereInputSchema'
import { word_bundlesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/word_bundlesOrderByWithAggregationInputSchema'
import { Word_bundlesScalarFieldEnumSchema } from '../inputTypeSchemas/Word_bundlesScalarFieldEnumSchema'
import { word_bundlesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/word_bundlesScalarWhereWithAggregatesInputSchema'

export const word_bundlesGroupByArgsSchema: z.ZodType<Prisma.word_bundlesGroupByArgs> = z.object({
  where: word_bundlesWhereInputSchema.optional(),
  orderBy: z.union([ word_bundlesOrderByWithAggregationInputSchema.array(),word_bundlesOrderByWithAggregationInputSchema ]).optional(),
  by: Word_bundlesScalarFieldEnumSchema.array(),
  having: word_bundlesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default word_bundlesGroupByArgsSchema;
