import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categoriesCreatecategoriesInputSchema: z.ZodType<Prisma.menu_categoriesCreatecategoriesInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default menu_categoriesCreatecategoriesInputSchema;
