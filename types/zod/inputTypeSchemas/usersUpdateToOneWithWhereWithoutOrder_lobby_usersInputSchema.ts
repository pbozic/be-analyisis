import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutOrder_lobby_usersInputSchema } from './usersUpdateWithoutOrder_lobby_usersInputSchema';
import { usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema } from './usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema';

export const usersUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutOrder_lobby_usersInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutOrder_lobby_usersInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutOrder_lobby_usersInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutOrder_lobby_usersInputSchema;
