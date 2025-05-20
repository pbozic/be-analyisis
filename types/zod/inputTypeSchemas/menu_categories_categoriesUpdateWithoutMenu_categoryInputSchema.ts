import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema } from './categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema';

export const menu_categories_categoriesUpdateWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateWithoutMenu_categoryInput> = z.object({
  category: z.lazy(() => categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema).optional()
}).strict();

export default menu_categories_categoriesUpdateWithoutMenu_categoryInputSchema;
