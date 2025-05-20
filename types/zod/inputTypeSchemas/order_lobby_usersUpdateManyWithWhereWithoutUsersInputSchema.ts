import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersScalarWhereInputSchema } from './order_lobby_usersScalarWhereInputSchema';
import { order_lobby_usersUpdateManyMutationInputSchema } from './order_lobby_usersUpdateManyMutationInputSchema';
import { order_lobby_usersUncheckedUpdateManyWithoutUsersInputSchema } from './order_lobby_usersUncheckedUpdateManyWithoutUsersInputSchema';

export const order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersUpdateManyWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => order_lobby_usersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => order_lobby_usersUpdateManyMutationInputSchema),
				z.lazy(() => order_lobby_usersUncheckedUpdateManyWithoutUsersInputSchema),
			]),
		})
		.strict();

export default order_lobby_usersUpdateManyWithWhereWithoutUsersInputSchema;
