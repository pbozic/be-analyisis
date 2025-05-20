import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithoutBusinessInputSchema } from './word_buyUpdateWithoutBusinessInputSchema';
import { word_buyUncheckedUpdateWithoutBusinessInputSchema } from './word_buyUncheckedUpdateWithoutBusinessInputSchema';
import { word_buyCreateWithoutBusinessInputSchema } from './word_buyCreateWithoutBusinessInputSchema';
import { word_buyUncheckedCreateWithoutBusinessInputSchema } from './word_buyUncheckedCreateWithoutBusinessInputSchema';

export const word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => word_buyUpdateWithoutBusinessInputSchema),
				z.lazy(() => word_buyUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => word_buyCreateWithoutBusinessInputSchema),
				z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema;
