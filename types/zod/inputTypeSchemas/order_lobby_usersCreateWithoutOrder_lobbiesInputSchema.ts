import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutOrder_lobby_usersInputSchema } from './usersCreateNestedOneWithoutOrder_lobby_usersInputSchema';

export const order_lobby_usersCreateWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersCreateWithoutOrder_lobbiesInput> =
	z
		.object({
			order_lobby_users_id: z.string().uuid().optional(),
			limit: z.number(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			users: z.lazy(() => usersCreateNestedOneWithoutOrder_lobby_usersInputSchema),
		})
		.strict();

export default order_lobby_usersCreateWithoutOrder_lobbiesInputSchema;
