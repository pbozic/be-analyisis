import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesUpdateManyMutationInputSchema } from '../inputTypeSchemas/menu_categories_categoriesUpdateManyMutationInputSchema'
import { menu_categories_categoriesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/menu_categories_categoriesUncheckedUpdateManyInputSchema'
import { menu_categories_categoriesWhereInputSchema } from '../inputTypeSchemas/menu_categories_categoriesWhereInputSchema'

export const menu_categories_categoriesUpdateManyArgsSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateManyArgs> = z.object({
  data: z.union([ menu_categories_categoriesUpdateManyMutationInputSchema,menu_categories_categoriesUncheckedUpdateManyInputSchema ]),
  where: menu_categories_categoriesWhereInputSchema.optional(),
}).strict() ;

export default menu_categories_categoriesUpdateManyArgsSchema;
