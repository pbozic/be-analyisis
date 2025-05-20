import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedUpdateWithoutCategoryInput> = z.object({
  menu_categories_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default menu_categories_categoriesUncheckedUpdateWithoutCategoryInputSchema;
