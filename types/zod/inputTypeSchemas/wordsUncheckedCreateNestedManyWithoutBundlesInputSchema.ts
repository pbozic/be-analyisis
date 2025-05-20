import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutBundlesInputSchema } from './wordsCreateWithoutBundlesInputSchema';
import { wordsUncheckedCreateWithoutBundlesInputSchema } from './wordsUncheckedCreateWithoutBundlesInputSchema';
import { wordsCreateOrConnectWithoutBundlesInputSchema } from './wordsCreateOrConnectWithoutBundlesInputSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';

export const wordsUncheckedCreateNestedManyWithoutBundlesInputSchema: z.ZodType<Prisma.wordsUncheckedCreateNestedManyWithoutBundlesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wordsCreateWithoutBundlesInputSchema),
					z.lazy(() => wordsCreateWithoutBundlesInputSchema).array(),
					z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema),
					z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema),
					z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([z.lazy(() => wordsWhereUniqueInputSchema), z.lazy(() => wordsWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export default wordsUncheckedCreateNestedManyWithoutBundlesInputSchema;
