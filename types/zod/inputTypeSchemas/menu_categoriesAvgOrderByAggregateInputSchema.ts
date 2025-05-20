import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categoriesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.menu_categoriesAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  menu_order_index: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default menu_categoriesAvgOrderByAggregateInputSchema;
