import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsCreateWithoutSubscriptionsInputSchema } from './wordsCreateWithoutSubscriptionsInputSchema';
import { wordsUncheckedCreateWithoutSubscriptionsInputSchema } from './wordsUncheckedCreateWithoutSubscriptionsInputSchema';

export const wordsCreateOrConnectWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsCreateOrConnectWithoutSubscriptionsInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => wordsCreateWithoutSubscriptionsInputSchema),
				z.lazy(() => wordsUncheckedCreateWithoutSubscriptionsInputSchema),
			]),
		})
		.strict();

export default wordsCreateOrConnectWithoutSubscriptionsInputSchema;
