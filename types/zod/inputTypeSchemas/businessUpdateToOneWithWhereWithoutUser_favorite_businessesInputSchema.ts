import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutUser_favorite_businessesInputSchema } from './businessUpdateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema';

export const businessUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutUser_favorite_businessesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema;
