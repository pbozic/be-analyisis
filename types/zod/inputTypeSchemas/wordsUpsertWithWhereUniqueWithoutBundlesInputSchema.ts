import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutBundlesInputSchema } from './wordsUpdateWithoutBundlesInputSchema';
import { wordsUncheckedUpdateWithoutBundlesInputSchema } from './wordsUncheckedUpdateWithoutBundlesInputSchema';
import { wordsCreateWithoutBundlesInputSchema } from './wordsCreateWithoutBundlesInputSchema';
import { wordsUncheckedCreateWithoutBundlesInputSchema } from './wordsUncheckedCreateWithoutBundlesInputSchema';

export const wordsUpsertWithWhereUniqueWithoutBundlesInputSchema: z.ZodType<Prisma.wordsUpsertWithWhereUniqueWithoutBundlesInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => wordsUpdateWithoutBundlesInputSchema),
				z.lazy(() => wordsUncheckedUpdateWithoutBundlesInputSchema),
			]),
			create: z.union([
				z.lazy(() => wordsCreateWithoutBundlesInputSchema),
				z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema),
			]),
		})
		.strict();

export default wordsUpsertWithWhereUniqueWithoutBundlesInputSchema;
