import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';

export const order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_usersInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema).optional(),
			connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default order_lobbiesCreateNestedOneWithoutOrder_lobby_usersInputSchema;
