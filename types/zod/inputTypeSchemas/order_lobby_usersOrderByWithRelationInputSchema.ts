import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { order_lobbiesOrderByWithRelationInputSchema } from './order_lobbiesOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const order_lobby_usersOrderByWithRelationInputSchema: z.ZodType<Prisma.order_lobby_usersOrderByWithRelationInput> =
	z
		.object({
			order_lobby_users_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
			limit: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies: z.lazy(() => order_lobbiesOrderByWithRelationInputSchema).optional(),
			users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default order_lobby_usersOrderByWithRelationInputSchema;
