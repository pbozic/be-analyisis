import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUpdateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema';
import { menu_categoriesCreateWithoutMenu_itemsInputSchema } from './menu_categoriesCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const menu_categoriesUpsertWithoutMenu_itemsInputSchema: z.ZodType<Prisma.menu_categoriesUpsertWithoutMenu_itemsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => menu_categoriesUpdateWithoutMenu_itemsInputSchema),
				z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema),
			]),
			create: z.union([
				z.lazy(() => menu_categoriesCreateWithoutMenu_itemsInputSchema),
				z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema),
			]),
			where: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
		})
		.strict();

export default menu_categoriesUpsertWithoutMenu_itemsInputSchema;
