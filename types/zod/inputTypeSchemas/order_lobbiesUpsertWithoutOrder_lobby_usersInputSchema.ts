import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const order_lobbiesUpsertWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.order_lobbiesUpsertWithoutOrder_lobby_usersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema),
			]),
			create: z.union([
				z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema),
			]),
			where: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
		})
		.strict();

export default order_lobbiesUpsertWithoutOrder_lobby_usersInputSchema;
