import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema';
import { categoriesCreateNestedOneWithoutMenu_categoriesInputSchema } from './categoriesCreateNestedOneWithoutMenu_categoriesInputSchema';

export const menu_categories_categoriesCreateInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateInput> = z.object({
  menu_category: z.lazy(() => menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema),
  category: z.lazy(() => categoriesCreateNestedOneWithoutMenu_categoriesInputSchema)
}).strict();

export default menu_categories_categoriesCreateInputSchema;
