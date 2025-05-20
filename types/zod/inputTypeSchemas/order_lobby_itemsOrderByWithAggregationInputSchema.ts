import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { order_lobby_itemsCountOrderByAggregateInputSchema } from './order_lobby_itemsCountOrderByAggregateInputSchema';
import { order_lobby_itemsAvgOrderByAggregateInputSchema } from './order_lobby_itemsAvgOrderByAggregateInputSchema';
import { order_lobby_itemsMaxOrderByAggregateInputSchema } from './order_lobby_itemsMaxOrderByAggregateInputSchema';
import { order_lobby_itemsMinOrderByAggregateInputSchema } from './order_lobby_itemsMinOrderByAggregateInputSchema';
import { order_lobby_itemsSumOrderByAggregateInputSchema } from './order_lobby_itemsSumOrderByAggregateInputSchema';

export const order_lobby_itemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.order_lobby_itemsOrderByWithAggregationInput> =
	z
		.object({
			order_lobby_items_id: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
			menu_item_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			sides: z.lazy(() => SortOrderSchema).optional(),
			extras: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			customer_note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => order_lobby_itemsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => order_lobby_itemsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => order_lobby_itemsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => order_lobby_itemsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => order_lobby_itemsSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default order_lobby_itemsOrderByWithAggregationInputSchema;
