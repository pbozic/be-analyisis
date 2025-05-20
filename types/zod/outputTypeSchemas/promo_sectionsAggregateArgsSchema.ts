import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsWhereInputSchema } from '../inputTypeSchemas/promo_sectionsWhereInputSchema'
import { promo_sectionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_sectionsOrderByWithRelationInputSchema'
import { promo_sectionsWhereUniqueInputSchema } from '../inputTypeSchemas/promo_sectionsWhereUniqueInputSchema'

export const promo_sectionsAggregateArgsSchema: z.ZodType<Prisma.promo_sectionsAggregateArgs> = z.object({
  where: promo_sectionsWhereInputSchema.optional(),
  orderBy: z.union([ promo_sectionsOrderByWithRelationInputSchema.array(),promo_sectionsOrderByWithRelationInputSchema ]).optional(),
  cursor: promo_sectionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default promo_sectionsAggregateArgsSchema;
