import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyWhereInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereInputSchema'
import { promo_sections_buyOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_sections_buyOrderByWithRelationInputSchema'
import { promo_sections_buyWhereUniqueInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereUniqueInputSchema'

export const promo_sections_buyAggregateArgsSchema: z.ZodType<Prisma.promo_sections_buyAggregateArgs> = z.object({
  where: promo_sections_buyWhereInputSchema.optional(),
  orderBy: z.union([ promo_sections_buyOrderByWithRelationInputSchema.array(),promo_sections_buyOrderByWithRelationInputSchema ]).optional(),
  cursor: promo_sections_buyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default promo_sections_buyAggregateArgsSchema;
