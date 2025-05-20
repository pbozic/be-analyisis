import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesUpdateWithoutSub_categoriesInputSchema } from './categoriesUpdateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutSub_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutSub_categoriesInputSchema';
import { categoriesCreateWithoutSub_categoriesInputSchema } from './categoriesCreateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutSub_categoriesInputSchema } from './categoriesUncheckedCreateWithoutSub_categoriesInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const categoriesUpsertWithoutSub_categoriesInputSchema: z.ZodType<Prisma.categoriesUpsertWithoutSub_categoriesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => categoriesUpdateWithoutSub_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutSub_categoriesInputSchema),
			]),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutSub_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutSub_categoriesInputSchema),
			]),
			where: z.lazy(() => categoriesWhereInputSchema).optional(),
		})
		.strict();

export default categoriesUpsertWithoutSub_categoriesInputSchema;
