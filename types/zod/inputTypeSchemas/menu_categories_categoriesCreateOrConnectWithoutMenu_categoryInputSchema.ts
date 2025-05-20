import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';
import { menu_categories_categoriesCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesCreateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema';

export const menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInput> =
	z
		.object({
			where: z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_categories_categoriesCreateWithoutMenu_categoryInputSchema),
				z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema),
			]),
		})
		.strict();

export default menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema;
