import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema } from './menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema';

export const menu_categories_categoriesUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateWithoutCategoryInput> =
	z
		.object({
			menu_category: z
				.lazy(() => menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema)
				.optional(),
		})
		.strict();

export default menu_categories_categoriesUpdateWithoutCategoryInputSchema;
