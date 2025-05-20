import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInputSchema';

export const order_lobby_usersCreateWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersCreateWithoutUsersInput> =
	z
		.object({
			order_lobby_users_id: z.string().uuid().optional(),
			limit: z.number(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			order_lobbies: z.lazy(() => order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInputSchema),
		})
		.strict();

export default order_lobby_usersCreateWithoutUsersInputSchema;
