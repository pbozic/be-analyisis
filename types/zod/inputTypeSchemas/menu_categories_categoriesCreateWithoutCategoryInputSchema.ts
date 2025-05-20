import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema';

export const menu_categories_categoriesCreateWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateWithoutCategoryInput> =
	z
		.object({
			menu_category: z.lazy(() => menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema),
		})
		.strict();

export default menu_categories_categoriesCreateWithoutCategoryInputSchema;
