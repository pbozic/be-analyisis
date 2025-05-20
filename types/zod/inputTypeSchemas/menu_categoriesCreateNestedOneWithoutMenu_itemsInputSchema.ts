import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenu_itemsInputSchema } from './menu_categoriesCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema } from './menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';

export const menu_categoriesCreateNestedOneWithoutMenu_itemsInputSchema: z.ZodType<Prisma.menu_categoriesCreateNestedOneWithoutMenu_itemsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categoriesCreateWithoutMenu_itemsInputSchema),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema).optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default menu_categoriesCreateNestedOneWithoutMenu_itemsInputSchema;
