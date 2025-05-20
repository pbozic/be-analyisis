import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryWhereInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereInputSchema'
import { promo_ads_categoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/promo_ads_categoryOrderByWithAggregationInputSchema'
import { Promo_ads_categoryScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_ads_categoryScalarFieldEnumSchema'
import { promo_ads_categoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/promo_ads_categoryScalarWhereWithAggregatesInputSchema'

export const promo_ads_categoryGroupByArgsSchema: z.ZodType<Prisma.promo_ads_categoryGroupByArgs> = z.object({
  where: promo_ads_categoryWhereInputSchema.optional(),
  orderBy: z.union([ promo_ads_categoryOrderByWithAggregationInputSchema.array(),promo_ads_categoryOrderByWithAggregationInputSchema ]).optional(),
  by: Promo_ads_categoryScalarFieldEnumSchema.array(),
  having: promo_ads_categoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default promo_ads_categoryGroupByArgsSchema;
