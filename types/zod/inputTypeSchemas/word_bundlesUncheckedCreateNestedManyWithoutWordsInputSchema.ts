import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesCreateWithoutWordsInputSchema } from './word_bundlesCreateWithoutWordsInputSchema';
import { word_bundlesUncheckedCreateWithoutWordsInputSchema } from './word_bundlesUncheckedCreateWithoutWordsInputSchema';
import { word_bundlesCreateOrConnectWithoutWordsInputSchema } from './word_bundlesCreateOrConnectWithoutWordsInputSchema';
import { word_bundlesWhereUniqueInputSchema } from './word_bundlesWhereUniqueInputSchema';

export const word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema: z.ZodType<Prisma.word_bundlesUncheckedCreateNestedManyWithoutWordsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => word_bundlesCreateWithoutWordsInputSchema),
					z.lazy(() => word_bundlesCreateWithoutWordsInputSchema).array(),
					z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema),
					z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => word_bundlesCreateOrConnectWithoutWordsInputSchema),
					z.lazy(() => word_bundlesCreateOrConnectWithoutWordsInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => word_bundlesWhereUniqueInputSchema),
					z.lazy(() => word_bundlesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default word_bundlesUncheckedCreateNestedManyWithoutWordsInputSchema;
