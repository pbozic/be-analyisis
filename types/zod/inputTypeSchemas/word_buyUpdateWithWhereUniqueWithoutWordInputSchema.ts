import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithoutWordInputSchema } from './word_buyUpdateWithoutWordInputSchema';
import { word_buyUncheckedUpdateWithoutWordInputSchema } from './word_buyUncheckedUpdateWithoutWordInputSchema';

export const word_buyUpdateWithWhereUniqueWithoutWordInputSchema: z.ZodType<Prisma.word_buyUpdateWithWhereUniqueWithoutWordInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => word_buyUpdateWithoutWordInputSchema),
				z.lazy(() => word_buyUncheckedUpdateWithoutWordInputSchema),
			]),
		})
		.strict();

export default word_buyUpdateWithWhereUniqueWithoutWordInputSchema;
