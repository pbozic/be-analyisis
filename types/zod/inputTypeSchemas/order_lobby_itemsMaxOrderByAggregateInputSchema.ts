import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_itemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobby_itemsMaxOrderByAggregateInput> = z.object({
  order_lobby_items_id: z.lazy(() => SortOrderSchema).optional(),
  order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
  menu_item_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  customer_note: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default order_lobby_itemsMaxOrderByAggregateInputSchema;
