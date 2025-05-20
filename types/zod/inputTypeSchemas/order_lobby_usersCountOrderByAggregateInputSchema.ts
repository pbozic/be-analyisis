import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobby_usersCountOrderByAggregateInput> =
	z
		.object({
			order_lobby_users_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
			limit: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default order_lobby_usersCountOrderByAggregateInputSchema;
