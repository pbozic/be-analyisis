import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema } from './menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema';
import { categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema } from './categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema';

export const menu_categories_categoriesUpdateInputSchema: z.ZodType<Prisma.menu_categories_categoriesUpdateInput> = z
	.object({
		menu_category: z
			.lazy(() => menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema)
			.optional(),
		category: z.lazy(() => categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema).optional(),
	})
	.strict();

export default menu_categories_categoriesUpdateInputSchema;
