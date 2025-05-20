import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableUpdateWithoutCategoriesInputSchema } from './translatableUpdateWithoutCategoriesInputSchema';
import { translatableUncheckedUpdateWithoutCategoriesInputSchema } from './translatableUncheckedUpdateWithoutCategoriesInputSchema';
import { translatableCreateWithoutCategoriesInputSchema } from './translatableCreateWithoutCategoriesInputSchema';
import { translatableUncheckedCreateWithoutCategoriesInputSchema } from './translatableUncheckedCreateWithoutCategoriesInputSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const translatableUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableUpsertWithoutCategoriesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => translatableUpdateWithoutCategoriesInputSchema),
				z.lazy(() => translatableUncheckedUpdateWithoutCategoriesInputSchema),
			]),
			create: z.union([
				z.lazy(() => translatableCreateWithoutCategoriesInputSchema),
				z.lazy(() => translatableUncheckedCreateWithoutCategoriesInputSchema),
			]),
			where: z.lazy(() => translatableWhereInputSchema).optional(),
		})
		.strict();

export default translatableUpsertWithoutCategoriesInputSchema;
