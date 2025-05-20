import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesUpdateWithoutMenu_categoriesInputSchema } from './categoriesUpdateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema';
import { categoriesCreateWithoutMenu_categoriesInputSchema } from './categoriesCreateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedCreateWithoutMenu_categoriesInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const categoriesUpsertWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesUpsertWithoutMenu_categoriesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => categoriesUpdateWithoutMenu_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema),
			]),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutMenu_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutMenu_categoriesInputSchema),
			]),
			where: z.lazy(() => categoriesWhereInputSchema).optional(),
		})
		.strict();

export default categoriesUpsertWithoutMenu_categoriesInputSchema;
