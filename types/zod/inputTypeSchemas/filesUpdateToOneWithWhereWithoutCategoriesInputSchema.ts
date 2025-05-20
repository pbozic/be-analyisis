import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereInputSchema } from './filesWhereInputSchema';
import { filesUpdateWithoutCategoriesInputSchema } from './filesUpdateWithoutCategoriesInputSchema';
import { filesUncheckedUpdateWithoutCategoriesInputSchema } from './filesUncheckedUpdateWithoutCategoriesInputSchema';

export const filesUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutCategoriesInput> =
	z
		.object({
			where: z.lazy(() => filesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => filesUpdateWithoutCategoriesInputSchema),
				z.lazy(() => filesUncheckedUpdateWithoutCategoriesInputSchema),
			]),
		})
		.strict();

export default filesUpdateToOneWithWhereWithoutCategoriesInputSchema;
