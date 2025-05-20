import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema';

export const menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInputSchema: z.ZodType<Prisma.menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInput> = z.object({
  where: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema),z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema) ]),
}).strict();

export default menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInputSchema;
