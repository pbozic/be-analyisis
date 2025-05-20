import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutUser_favorite_businessesInputSchema } from './usersUpdateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema';
import { usersCreateWithoutUser_favorite_businessesInputSchema } from './usersCreateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.usersUpsertWithoutUser_favorite_businessesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => usersUpdateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => usersCreateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutUser_favorite_businessesInputSchema),
			]),
			where: z.lazy(() => usersWhereInputSchema).optional(),
		})
		.strict();

export default usersUpsertWithoutUser_favorite_businessesInputSchema;
