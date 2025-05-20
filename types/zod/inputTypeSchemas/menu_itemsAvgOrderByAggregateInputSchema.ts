import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_itemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.menu_itemsAvgOrderByAggregateInput> = z.object({
  spicy_level: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  menu_category_order_index: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default menu_itemsAvgOrderByAggregateInputSchema;
