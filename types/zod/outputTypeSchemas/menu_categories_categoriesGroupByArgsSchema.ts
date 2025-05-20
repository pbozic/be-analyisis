import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereInputSchema'
import { menu_categories_categoriesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/menu_categories_categoriesOrderByWithAggregationInputSchema'
import { Menu_categories_categoriesScalarFieldEnumSchema } from '../inputTypeSchemas/Menu_categories_categoriesScalarFieldEnumSchema'
import { menu_categories_categoriesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/menu_categories_categoriesScalarWhereWithAggregatesInputSchema'

export const menu_categories_categoriesGroupByArgsSchema: z.ZodType<Prisma.menu_categories_categoriesGroupByArgs> = z.object({
  where: menu_categories_categoriesWhereInputSchema.optional(),
  orderBy: z.union([ menu_categories_categoriesOrderByWithAggregationInputSchema.array(),menu_categories_categoriesOrderByWithAggregationInputSchema ]).optional(),
  by: Menu_categories_categoriesScalarFieldEnumSchema.array(),
  having: menu_categories_categoriesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default menu_categories_categoriesGroupByArgsSchema;
