import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsCreateWithoutCategoryInputSchema } from './wordsCreateWithoutCategoryInputSchema';
import { wordsUncheckedCreateWithoutCategoryInputSchema } from './wordsUncheckedCreateWithoutCategoryInputSchema';

export const wordsCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.wordsCreateOrConnectWithoutCategoryInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => wordsCreateWithoutCategoryInputSchema),
				z.lazy(() => wordsUncheckedCreateWithoutCategoryInputSchema),
			]),
		})
		.strict();

export default wordsCreateOrConnectWithoutCategoryInputSchema;
