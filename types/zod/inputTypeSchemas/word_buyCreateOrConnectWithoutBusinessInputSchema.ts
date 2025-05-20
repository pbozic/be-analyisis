import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyCreateWithoutBusinessInputSchema } from './word_buyCreateWithoutBusinessInputSchema';
import { word_buyUncheckedCreateWithoutBusinessInputSchema } from './word_buyUncheckedCreateWithoutBusinessInputSchema';

export const word_buyCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => word_buyWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => word_buyCreateWithoutBusinessInputSchema),
				z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default word_buyCreateOrConnectWithoutBusinessInputSchema;
