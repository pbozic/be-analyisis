import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';

export const menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema: z.ZodType<Prisma.menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema)
				.optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default menu_categoriesCreateNestedOneWithoutMenu_categories_categoriesInputSchema;
