import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInput> = z.object({
  categories_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default menu_categories_categoriesUncheckedUpdateWithoutMenu_categoryInputSchema;
