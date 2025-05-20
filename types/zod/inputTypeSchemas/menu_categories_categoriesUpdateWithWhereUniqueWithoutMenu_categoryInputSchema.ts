import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesUpdateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUpdateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInputSchema';

export const menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => menu_categories_categoriesUpdateWithoutMenu_categoryInputSchema),z.lazy(() => menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesUpdateWithWhereUniqueWithoutMenu_categoryInputSchema;
