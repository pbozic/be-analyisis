import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyWhereInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereInputSchema'
import { promo_sections_buyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/promo_sections_buyOrderByWithAggregationInputSchema'
import { Promo_sections_buyScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_sections_buyScalarFieldEnumSchema'
import { promo_sections_buyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/promo_sections_buyScalarWhereWithAggregatesInputSchema'

export const promo_sections_buyGroupByArgsSchema: z.ZodType<Prisma.promo_sections_buyGroupByArgs> = z.object({
  where: promo_sections_buyWhereInputSchema.optional(),
  orderBy: z.union([ promo_sections_buyOrderByWithAggregationInputSchema.array(),promo_sections_buyOrderByWithAggregationInputSchema ]).optional(),
  by: Promo_sections_buyScalarFieldEnumSchema.array(),
  having: promo_sections_buyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default promo_sections_buyGroupByArgsSchema;
