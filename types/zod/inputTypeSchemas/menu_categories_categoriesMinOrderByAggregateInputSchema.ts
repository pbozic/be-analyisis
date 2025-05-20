import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categories_categoriesMinOrderByAggregateInputSchema: z.ZodType<Prisma.menu_categories_categoriesMinOrderByAggregateInput> = z.object({
  menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
  categories_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default menu_categories_categoriesMinOrderByAggregateInputSchema;
