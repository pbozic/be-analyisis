import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesScalarWhereInputSchema } from './menu_categories_categoriesScalarWhereInputSchema';
import { menu_categories_categoriesUpdateManyMutationInputSchema } from './menu_categories_categoriesUpdateManyMutationInputSchema';
import { menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryInputSchema';

export const menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => menu_categories_categoriesUpdateManyMutationInputSchema),z.lazy(() => menu_categories_categoriesUncheckedUpdateManyWithoutMenu_categoryInputSchema) ]),
}).strict();

export default menu_categories_categoriesUpdateManyWithWhereWithoutMenu_categoryInputSchema;
