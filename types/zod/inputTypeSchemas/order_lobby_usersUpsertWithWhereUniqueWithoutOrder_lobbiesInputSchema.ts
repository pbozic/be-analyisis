import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema';

export const order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInput> =
	z
		.object({
			where: z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => order_lobby_usersUpdateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => order_lobby_usersUncheckedUpdateWithoutOrder_lobbiesInputSchema),
			]),
			create: z.union([
				z.lazy(() => order_lobby_usersCreateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema),
			]),
		})
		.strict();

export default order_lobby_usersUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema;
