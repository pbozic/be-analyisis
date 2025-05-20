import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesUpdateWithoutCategoryInputSchema } from './menu_categories_categoriesUpdateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema';
import { menu_categories_categoriesCreateWithoutCategoryInputSchema } from './menu_categories_categoriesCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema';

export const menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => menu_categories_categoriesUpdateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesUpsertWithWhereUniqueWithoutCategoryInputSchema;
