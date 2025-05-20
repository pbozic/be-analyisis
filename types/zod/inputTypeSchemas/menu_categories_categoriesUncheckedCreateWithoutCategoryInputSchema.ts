import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedCreateWithoutCategoryInput> =
	z
		.object({
			menu_categories_id: z.string(),
		})
		.strict();

export default menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema;
