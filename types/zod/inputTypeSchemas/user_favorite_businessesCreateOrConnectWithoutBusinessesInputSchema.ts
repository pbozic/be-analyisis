import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesCreateWithoutBusinessesInputSchema } from './user_favorite_businessesCreateWithoutBusinessesInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema';

export const user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesCreateOrConnectWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => user_favorite_businessesCreateWithoutBusinessesInputSchema),
				z.lazy(() => user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema;
