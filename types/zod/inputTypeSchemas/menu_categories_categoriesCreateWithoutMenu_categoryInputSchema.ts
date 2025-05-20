import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateNestedOneWithoutMenu_categoriesInputSchema } from './categoriesCreateNestedOneWithoutMenu_categoriesInputSchema';

export const menu_categories_categoriesCreateWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateWithoutMenu_categoryInput> =
	z
		.object({
			category: z.lazy(() => categoriesCreateNestedOneWithoutMenu_categoriesInputSchema),
		})
		.strict();

export default menu_categories_categoriesCreateWithoutMenu_categoryInputSchema;
