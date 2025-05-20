import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema';

export const menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema: z.ZodType<Prisma.menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInput> = z.object({
  where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema),z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema) ]),
}).strict();

export default menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema;
