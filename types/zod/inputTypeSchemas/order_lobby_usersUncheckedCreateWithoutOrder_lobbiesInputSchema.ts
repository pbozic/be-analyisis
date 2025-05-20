import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInput> =
	z
		.object({
			order_lobby_users_id: z.string().uuid().optional(),
			user_id: z.string(),
			limit: z.number(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema;
