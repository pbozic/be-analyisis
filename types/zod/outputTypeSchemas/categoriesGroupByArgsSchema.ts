import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesWhereInputSchema } from '../inputTypeSchemas/categoriesWhereInputSchema'
import { categoriesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/categoriesOrderByWithAggregationInputSchema'
import { CategoriesScalarFieldEnumSchema } from '../inputTypeSchemas/CategoriesScalarFieldEnumSchema'
import { categoriesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/categoriesScalarWhereWithAggregatesInputSchema'

export const categoriesGroupByArgsSchema: z.ZodType<Prisma.categoriesGroupByArgs> = z.object({
  where: categoriesWhereInputSchema.optional(),
  orderBy: z.union([ categoriesOrderByWithAggregationInputSchema.array(),categoriesOrderByWithAggregationInputSchema ]).optional(),
  by: CategoriesScalarFieldEnumSchema.array(),
  having: categoriesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default categoriesGroupByArgsSchema;
