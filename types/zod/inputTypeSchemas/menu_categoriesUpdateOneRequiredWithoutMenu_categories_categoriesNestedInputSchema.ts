import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedCreateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesCreateOrConnectWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUpsertWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUpsertWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema';

export const menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema: z.ZodType<Prisma.menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInput> =
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
			upsert: z.lazy(() => menu_categoriesUpsertWithoutMenu_categories_categoriesInputSchema).optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => menu_categoriesUpdateToOneWithWhereWithoutMenu_categories_categoriesInputSchema),
					z.lazy(() => menu_categoriesUpdateWithoutMenu_categories_categoriesInputSchema),
					z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenu_categories_categoriesInputSchema),
				])
				.optional(),
		})
		.strict();

export default menu_categoriesUpdateOneRequiredWithoutMenu_categories_categoriesNestedInputSchema;
