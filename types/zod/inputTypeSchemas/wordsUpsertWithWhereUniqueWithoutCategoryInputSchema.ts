import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutCategoryInputSchema } from './wordsUpdateWithoutCategoryInputSchema';
import { wordsUncheckedUpdateWithoutCategoryInputSchema } from './wordsUncheckedUpdateWithoutCategoryInputSchema';
import { wordsCreateWithoutCategoryInputSchema } from './wordsCreateWithoutCategoryInputSchema';
import { wordsUncheckedCreateWithoutCategoryInputSchema } from './wordsUncheckedCreateWithoutCategoryInputSchema';

export const wordsUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.wordsUpsertWithWhereUniqueWithoutCategoryInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => wordsUpdateWithoutCategoryInputSchema),
				z.lazy(() => wordsUncheckedUpdateWithoutCategoryInputSchema),
			]),
			create: z.union([
				z.lazy(() => wordsCreateWithoutCategoryInputSchema),
				z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema),
			]),
		})
		.strict();

export default wordsUpsertWithWhereUniqueWithoutCategoryInputSchema;
