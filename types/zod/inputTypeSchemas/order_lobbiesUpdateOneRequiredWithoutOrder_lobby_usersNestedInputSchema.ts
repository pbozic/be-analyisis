import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema } from './order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUpsertWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUpsertWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema';

export const order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema: z.ZodType<Prisma.order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_usersInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_usersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutOrder_lobby_usersInputSchema).optional(),
			upsert: z.lazy(() => order_lobbiesUpsertWithoutOrder_lobby_usersInputSchema).optional(),
			connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => order_lobbiesUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema),
					z.lazy(() => order_lobbiesUpdateWithoutOrder_lobby_usersInputSchema),
					z.lazy(() => order_lobbiesUncheckedUpdateWithoutOrder_lobby_usersInputSchema),
				])
				.optional(),
		})
		.strict();

export default order_lobbiesUpdateOneRequiredWithoutOrder_lobby_usersNestedInputSchema;
