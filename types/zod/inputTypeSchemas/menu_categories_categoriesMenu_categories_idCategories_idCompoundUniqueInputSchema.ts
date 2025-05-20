import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema: z.ZodType<Prisma.menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInput> =
	z
		.object({
			menu_categories_id: z.string(),
			categories_id: z.string(),
		})
		.strict();

export default menu_categories_categoriesMenu_categories_idCategories_idCompoundUniqueInputSchema;
