import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithoutWordInputSchema } from './word_buyUpdateWithoutWordInputSchema';
import { word_buyUncheckedUpdateWithoutWordInputSchema } from './word_buyUncheckedUpdateWithoutWordInputSchema';
import { word_buyCreateWithoutWordInputSchema } from './word_buyCreateWithoutWordInputSchema';
import { word_buyUncheckedCreateWithoutWordInputSchema } from './word_buyUncheckedCreateWithoutWordInputSchema';

export const word_buyUpsertWithWhereUniqueWithoutWordInputSchema: z.ZodType<Prisma.word_buyUpsertWithWhereUniqueWithoutWordInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => word_buyUpdateWithoutWordInputSchema),
				z.lazy(() => word_buyUncheckedUpdateWithoutWordInputSchema),
			]),
			create: z.union([
				z.lazy(() => word_buyCreateWithoutWordInputSchema),
				z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema),
			]),
		})
		.strict();

export default word_buyUpsertWithWhereUniqueWithoutWordInputSchema;
