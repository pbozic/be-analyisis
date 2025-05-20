import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutBundlesInputSchema } from './wordsUpdateWithoutBundlesInputSchema';
import { wordsUncheckedUpdateWithoutBundlesInputSchema } from './wordsUncheckedUpdateWithoutBundlesInputSchema';

export const wordsUpdateWithWhereUniqueWithoutBundlesInputSchema: z.ZodType<Prisma.wordsUpdateWithWhereUniqueWithoutBundlesInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => wordsUpdateWithoutBundlesInputSchema),
				z.lazy(() => wordsUncheckedUpdateWithoutBundlesInputSchema),
			]),
		})
		.strict();

export default wordsUpdateWithWhereUniqueWithoutBundlesInputSchema;
