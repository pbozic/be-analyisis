import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema } from './menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema';
import { menu_categories_categoriesWhereInputSchema } from './menu_categories_categoriesWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { Menu_categoriesRelationFilterSchema } from './Menu_categoriesRelationFilterSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { CategoriesRelationFilterSchema } from './CategoriesRelationFilterSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const menu_categories_categoriesWhereUniqueInputSchema: z.ZodType<Prisma.menu_categories_categoriesWhereUniqueInput> = z.object({
  menu_categories_id_categories_id: z.lazy(() => menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema)
})
.and(z.object({
  menu_categories_id_categories_id: z.lazy(() => menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => menu_categories_categoriesWhereInputSchema),z.lazy(() => menu_categories_categoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => menu_categories_categoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => menu_categories_categoriesWhereInputSchema),z.lazy(() => menu_categories_categoriesWhereInputSchema).array() ]).optional(),
  menu_categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_category: z.union([ z.lazy(() => Menu_categoriesRelationFilterSchema),z.lazy(() => menu_categoriesWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoriesRelationFilterSchema),z.lazy(() => categoriesWhereInputSchema) ]).optional(),
}).strict());

export default menu_categories_categoriesWhereUniqueInputSchema;
