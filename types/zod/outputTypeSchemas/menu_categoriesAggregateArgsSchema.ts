import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categoriesWhereInputSchema'
import { menu_categoriesOrderByWithRelationInputSchema } from '../inputTypeSchemas/menu_categoriesOrderByWithRelationInputSchema'
import { menu_categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/menu_categoriesWhereUniqueInputSchema'

export const menu_categoriesAggregateArgsSchema: z.ZodType<Prisma.menu_categoriesAggregateArgs> = z.object({
  where: menu_categoriesWhereInputSchema.optional(),
  orderBy: z.union([ menu_categoriesOrderByWithRelationInputSchema.array(),menu_categoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: menu_categoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default menu_categoriesAggregateArgsSchema;
