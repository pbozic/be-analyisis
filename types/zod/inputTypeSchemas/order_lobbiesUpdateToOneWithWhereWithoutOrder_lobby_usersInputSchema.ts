import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema';

export const order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInput> =
	z
		.object({
			where: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema),
			]),
		})
		.strict();

export default order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema;
