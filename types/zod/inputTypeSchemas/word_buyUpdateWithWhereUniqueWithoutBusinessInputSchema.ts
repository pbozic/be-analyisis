import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithoutBusinessInputSchema } from './word_buyUpdateWithoutBusinessInputSchema';
import { word_buyUncheckedUpdateWithoutBusinessInputSchema } from './word_buyUncheckedUpdateWithoutBusinessInputSchema';

export const word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => word_buyUpdateWithoutBusinessInputSchema),
				z.lazy(() => word_buyUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema;
