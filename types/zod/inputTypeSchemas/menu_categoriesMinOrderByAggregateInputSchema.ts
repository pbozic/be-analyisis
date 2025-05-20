import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_categoriesMinOrderByAggregateInputSchema: z.ZodType<Prisma.menu_categoriesMinOrderByAggregateInput> = z.object({
  menu_category_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  menu_id: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  menu_order_index: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default menu_categoriesMinOrderByAggregateInputSchema;
