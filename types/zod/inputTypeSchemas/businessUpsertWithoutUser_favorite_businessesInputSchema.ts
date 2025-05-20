import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutUser_favorite_businessesInputSchema } from './businessUpdateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema';
import { businessCreateWithoutUser_favorite_businessesInputSchema } from './businessCreateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.businessUpsertWithoutUser_favorite_businessesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutUser_favorite_businessesInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutUser_favorite_businessesInputSchema;
