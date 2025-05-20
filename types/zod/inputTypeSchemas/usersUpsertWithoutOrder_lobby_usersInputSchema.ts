import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutOrder_lobby_usersInputSchema } from './usersUpdateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema';
import { usersCreateWithoutOrder_lobby_usersInputSchema } from './usersCreateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedCreateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedCreateWithoutOrder_lobby_usersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.usersUpsertWithoutOrder_lobby_usersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => usersUpdateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema),
			]),
			create: z.union([
				z.lazy(() => usersCreateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutOrder_lobby_usersInputSchema),
			]),
			where: z.lazy(() => usersWhereInputSchema).optional(),
		})
		.strict();

export default usersUpsertWithoutOrder_lobby_usersInputSchema;
