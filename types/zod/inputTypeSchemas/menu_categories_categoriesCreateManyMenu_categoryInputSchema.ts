import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categories_categoriesCreateManyMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyMenu_categoryInput> = z.object({
  categories_id: z.string()
}).strict();

export default menu_categories_categoriesCreateManyMenu_categoryInputSchema;
