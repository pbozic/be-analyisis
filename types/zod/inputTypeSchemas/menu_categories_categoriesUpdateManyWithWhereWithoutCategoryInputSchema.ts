import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesScalarWhereInputSchema } from './menu_categories_categoriesScalarWhereInputSchema';
import { menu_categories_categoriesUpdateManyMutationInputSchema } from './menu_categories_categoriesUpdateManyMutationInputSchema';
import { menu_categories_categoriesUncheckedUpdateManyWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedUpdateManyWithoutCategoryInputSchema';

export const menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => menu_categories_categoriesUpdateManyMutationInputSchema),z.lazy(() => menu_categories_categoriesUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesUpdateManyWithWhereWithoutCategoryInputSchema;
