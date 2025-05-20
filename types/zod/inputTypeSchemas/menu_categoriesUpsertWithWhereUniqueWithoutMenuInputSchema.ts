import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateWithoutMenuInputSchema } from './menu_categoriesUpdateWithoutMenuInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenuInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenuInputSchema';
import { menu_categoriesCreateWithoutMenuInputSchema } from './menu_categoriesCreateWithoutMenuInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateWithoutMenuInputSchema';

export const menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.menu_categoriesUpsertWithWhereUniqueWithoutMenuInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => menu_categoriesUpdateWithoutMenuInputSchema),
				z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenuInputSchema),
			]),
			create: z.union([
				z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema),
				z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema),
			]),
		})
		.strict();

export default menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema;
