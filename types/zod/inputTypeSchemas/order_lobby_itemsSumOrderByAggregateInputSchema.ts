import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_itemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobby_itemsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default order_lobby_itemsSumOrderByAggregateInputSchema;
