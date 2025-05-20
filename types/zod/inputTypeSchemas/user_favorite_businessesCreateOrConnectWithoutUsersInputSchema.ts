import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesCreateWithoutUsersInputSchema } from './user_favorite_businessesCreateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedCreateWithoutUsersInputSchema';

export const user_favorite_businessesCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => user_favorite_businessesCreateWithoutUsersInputSchema),
				z.lazy(() => user_favorite_businessesUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default user_favorite_businessesCreateOrConnectWithoutUsersInputSchema;
