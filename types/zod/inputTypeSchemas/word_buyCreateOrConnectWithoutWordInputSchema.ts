import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyCreateWithoutWordInputSchema } from './word_buyCreateWithoutWordInputSchema';
import { word_buyUncheckedCreateWithoutWordInputSchema } from './word_buyUncheckedCreateWithoutWordInputSchema';

export const word_buyCreateOrConnectWithoutWordInputSchema: z.ZodType<Prisma.word_buyCreateOrConnectWithoutWordInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => word_buyCreateWithoutWordInputSchema),
				z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema),
			]),
		})
		.strict();

export default word_buyCreateOrConnectWithoutWordInputSchema;
