import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categories_categoriesCreateManyCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyCategoryInput> =
	z
		.object({
			menu_categories_id: z.string(),
		})
		.strict();

export default menu_categories_categoriesCreateManyCategoryInputSchema;
