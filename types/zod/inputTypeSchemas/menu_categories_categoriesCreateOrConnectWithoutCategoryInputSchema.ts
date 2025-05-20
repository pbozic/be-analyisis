import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesCreateWithoutCategoryInputSchema } from './menu_categories_categoriesCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema';

export const menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema;
