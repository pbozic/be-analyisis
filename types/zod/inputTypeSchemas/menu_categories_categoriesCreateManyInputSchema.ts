import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categories_categoriesCreateManyInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateManyInput> =
	z
		.object({
			menu_categories_id: z.string(),
			categories_id: z.string(),
		})
		.strict();

export default menu_categories_categoriesCreateManyInputSchema;
