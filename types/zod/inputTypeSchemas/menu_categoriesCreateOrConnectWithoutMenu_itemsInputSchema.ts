import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesCreateWithoutMenu_itemsInputSchema } from './menu_categoriesCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema';

export const menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema: z.ZodType<Prisma.menu_categoriesCreateOrConnectWithoutMenu_itemsInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_categoriesCreateWithoutMenu_itemsInputSchema),
				z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema),
			]),
		})
		.strict();

export default menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema;
