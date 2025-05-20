import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesUpdateWithoutUsersInputSchema } from './user_favorite_businessesUpdateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema';
import { user_favorite_businessesCreateWithoutUsersInputSchema } from './user_favorite_businessesCreateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedCreateWithoutUsersInputSchema';

export const user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => user_favorite_businessesUpdateWithoutUsersInputSchema),
				z.lazy(() => user_favorite_businessesUncheckedUpdateWithoutUsersInputSchema),
			]),
			create: z.union([
				z.lazy(() => user_favorite_businessesCreateWithoutUsersInputSchema),
				z.lazy(() => user_favorite_businessesUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema;
