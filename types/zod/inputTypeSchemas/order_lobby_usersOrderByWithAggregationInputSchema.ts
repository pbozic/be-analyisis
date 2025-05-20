import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { order_lobby_usersCountOrderByAggregateInputSchema } from './order_lobby_usersCountOrderByAggregateInputSchema';
import { order_lobby_usersAvgOrderByAggregateInputSchema } from './order_lobby_usersAvgOrderByAggregateInputSchema';
import { order_lobby_usersMaxOrderByAggregateInputSchema } from './order_lobby_usersMaxOrderByAggregateInputSchema';
import { order_lobby_usersMinOrderByAggregateInputSchema } from './order_lobby_usersMinOrderByAggregateInputSchema';
import { order_lobby_usersSumOrderByAggregateInputSchema } from './order_lobby_usersSumOrderByAggregateInputSchema';

export const order_lobby_usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.order_lobby_usersOrderByWithAggregationInput> =
	z
		.object({
			order_lobby_users_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
			limit: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => order_lobby_usersCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => order_lobby_usersAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => order_lobby_usersMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => order_lobby_usersMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => order_lobby_usersSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default order_lobby_usersOrderByWithAggregationInputSchema;
