import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUser_favorite_businessesInputSchema } from './usersCreateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { usersCreateOrConnectWithoutUser_favorite_businessesInputSchema } from './usersCreateOrConnectWithoutUser_favorite_businessesInputSchema';
import { usersUpsertWithoutUser_favorite_businessesInputSchema } from './usersUpsertWithoutUser_favorite_businessesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema } from './usersUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema';
import { usersUpdateWithoutUser_favorite_businessesInputSchema } from './usersUpdateWithoutUser_favorite_businessesInputSchema';
import { usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema';

export const usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutUser_favorite_businessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUser_favorite_businessesInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutUser_favorite_businessesInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => usersUpdateWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutUser_favorite_businessesInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema;
