import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereInputSchema'
import { menu_categories_categoriesOrderByWithRelationInputSchema } from '../inputTypeSchemas/menu_categories_categoriesOrderByWithRelationInputSchema'
import { menu_categories_categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereUniqueInputSchema'

export const menu_categories_categoriesAggregateArgsSchema: z.ZodType<Prisma.menu_categories_categoriesAggregateArgs> = z.object({
  where: menu_categories_categoriesWhereInputSchema.optional(),
  orderBy: z.union([ menu_categories_categoriesOrderByWithRelationInputSchema.array(),menu_categories_categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: menu_categories_categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default menu_categories_categoriesAggregateArgsSchema;
