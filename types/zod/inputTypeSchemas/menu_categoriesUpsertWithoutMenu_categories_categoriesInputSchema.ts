import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const menu_categoriesUpsertWithoutMenu_categories_categoriesInputSchema: z.ZodType<Prisma.menu_categoriesUpsertWithoutMenu_categories_categoriesInput> = z.object({
  update: z.union([ z.lazy(() => menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema),z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema) ]),
  create: z.union([ z.lazy(() => menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema),z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema) ]),
  where: z.lazy(() => menu_categoriesWhereInputSchema).optional()
}).strict();

export default menu_categoriesUpsertWithoutMenu_categories_categoriesInputSchema;
