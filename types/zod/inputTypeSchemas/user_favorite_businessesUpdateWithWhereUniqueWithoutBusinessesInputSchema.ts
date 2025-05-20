import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesUpdateWithoutBusinessesInputSchema } from './user_favorite_businessesUpdateWithoutBusinessesInputSchema';
import { user_favorite_businessesUncheckedUpdateWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedUpdateWithoutBusinessesInputSchema';

export const user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => user_favorite_businessesUpdateWithoutBusinessesInputSchema),
				z.lazy(() => user_favorite_businessesUncheckedUpdateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default user_favorite_businessesUpdateWithWhereUniqueWithoutBusinessesInputSchema;
