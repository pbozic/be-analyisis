import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { menu_categoriesUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUpdateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema';

export const menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInputSchema: z.ZodType<Prisma.menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => menu_categoriesUpdateWithoutMenu_itemsInputSchema),
				z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema),
			]),
		})
		.strict();

export default menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInputSchema;
