import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menu_itemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.menu_itemsCountOrderByAggregateInput> = z.object({
  menu_item_id: z.lazy(() => SortOrderSchema).optional(),
  names: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allergens: z.lazy(() => SortOrderSchema).optional(),
  spicy_level: z.lazy(() => SortOrderSchema).optional(),
  unit_size: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  sides: z.lazy(() => SortOrderSchema).optional(),
  extras: z.lazy(() => SortOrderSchema).optional(),
  ingredients: z.lazy(() => SortOrderSchema).optional(),
  availability: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  menu_category_id: z.lazy(() => SortOrderSchema).optional(),
  daily_date: z.lazy(() => SortOrderSchema).optional(),
  is_enabled: z.lazy(() => SortOrderSchema).optional(),
  menu_category_order_index: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default menu_itemsCountOrderByAggregateInputSchema;
