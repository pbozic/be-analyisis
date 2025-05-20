import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesUpdateWithoutCategoryInputSchema } from './menu_categories_categoriesUpdateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema';

export const menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => menu_categories_categoriesUpdateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesUpdateWithWhereUniqueWithoutCategoryInputSchema;
