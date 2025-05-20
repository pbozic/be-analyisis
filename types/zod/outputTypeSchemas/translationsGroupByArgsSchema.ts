import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsWhereInputSchema } from '../inputTypeSchemas/translationsWhereInputSchema'
import { translationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/translationsOrderByWithAggregationInputSchema'
import { TranslationsScalarFieldEnumSchema } from '../inputTypeSchemas/TranslationsScalarFieldEnumSchema'
import { translationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/translationsScalarWhereWithAggregatesInputSchema'

export const translationsGroupByArgsSchema: z.ZodType<Prisma.translationsGroupByArgs> = z.object({
  where: translationsWhereInputSchema.optional(),
  orderBy: z.union([ translationsOrderByWithAggregationInputSchema.array(),translationsOrderByWithAggregationInputSchema ]).optional(),
  by: TranslationsScalarFieldEnumSchema.array(),
  having: translationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default translationsGroupByArgsSchema;
