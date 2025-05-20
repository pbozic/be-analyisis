import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';
import { order_lobby_usersUpdateWithoutUsersInputSchema } from './order_lobby_usersUpdateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedUpdateWithoutUsersInputSchema } from './order_lobby_usersUncheckedUpdateWithoutUsersInputSchema';
import { order_lobby_usersCreateWithoutUsersInputSchema } from './order_lobby_usersCreateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedCreateWithoutUsersInputSchema } from './order_lobby_usersUncheckedCreateWithoutUsersInputSchema';

export const order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersUpsertWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => order_lobby_usersUpdateWithoutUsersInputSchema),
				z.lazy(() => order_lobby_usersUncheckedUpdateWithoutUsersInputSchema),
			]),
			create: z.union([
				z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema),
				z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default order_lobby_usersUpsertWithWhereUniqueWithoutUsersInputSchema;
