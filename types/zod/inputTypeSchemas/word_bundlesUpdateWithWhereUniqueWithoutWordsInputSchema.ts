import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesWhereUniqueInputSchema } from './word_bundlesWhereUniqueInputSchema';
import { word_bundlesUpdateWithoutWordsInputSchema } from './word_bundlesUpdateWithoutWordsInputSchema';
import { word_bundlesUncheckedUpdateWithoutWordsInputSchema } from './word_bundlesUncheckedUpdateWithoutWordsInputSchema';

export const word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema: z.ZodType<Prisma.word_bundlesUpdateWithWhereUniqueWithoutWordsInput> =
	z
		.object({
			where: z.lazy(() => word_bundlesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => word_bundlesUpdateWithoutWordsInputSchema),
				z.lazy(() => word_bundlesUncheckedUpdateWithoutWordsInputSchema),
			]),
		})
		.strict();

export default word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema;
