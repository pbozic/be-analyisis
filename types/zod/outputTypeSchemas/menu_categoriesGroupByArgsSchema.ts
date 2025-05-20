import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categoriesWhereInputSchema'
import { menu_categoriesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/menu_categoriesOrderByWithAggregationInputSchema'
import { Menu_categoriesScalarFieldEnumSchema } from '../inputTypeSchemas/Menu_categoriesScalarFieldEnumSchema'
import { menu_categoriesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/menu_categoriesScalarWhereWithAggregatesInputSchema'

export const menu_categoriesGroupByArgsSchema: z.ZodType<Prisma.menu_categoriesGroupByArgs> = z.object({
  where: menu_categoriesWhereInputSchema.optional(),
  orderBy: z.union([ menu_categoriesOrderByWithAggregationInputSchema.array(),menu_categoriesOrderByWithAggregationInputSchema ]).optional(),
  by: Menu_categoriesScalarFieldEnumSchema.array(),
  having: menu_categoriesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default menu_categoriesGroupByArgsSchema;
