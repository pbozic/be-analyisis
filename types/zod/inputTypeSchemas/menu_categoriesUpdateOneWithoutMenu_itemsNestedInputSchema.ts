import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenu_itemsInputSchema } from './menu_categoriesCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema } from './menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema';
import { menu_categoriesUpsertWithoutMenu_itemsInputSchema } from './menu_categoriesUpsertWithoutMenu_itemsInputSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInputSchema } from './menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInputSchema';
import { menu_categoriesUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUpdateWithoutMenu_itemsInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema';

export const menu_categoriesUpdateOneWithoutMenu_itemsNestedInputSchema: z.ZodType<Prisma.menu_categoriesUpdateOneWithoutMenu_itemsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categoriesCreateWithoutMenu_itemsInputSchema),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutMenu_itemsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menu_categoriesCreateOrConnectWithoutMenu_itemsInputSchema).optional(),
			upsert: z.lazy(() => menu_categoriesUpsertWithoutMenu_itemsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => menu_categoriesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => menu_categoriesWhereInputSchema)]).optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => menu_categoriesUpdateToOneWithWhereWithoutMenu_itemsInputSchema),
					z.lazy(() => menu_categoriesUpdateWithoutMenu_itemsInputSchema),
					z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_itemsInputSchema),
				])
				.optional(),
		})
		.strict();

export default menu_categoriesUpdateOneWithoutMenu_itemsNestedInputSchema;
