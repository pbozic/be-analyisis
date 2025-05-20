import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutWordsInputSchema } from './translatableCreateWithoutWordsInputSchema';
import { translatableUncheckedCreateWithoutWordsInputSchema } from './translatableUncheckedCreateWithoutWordsInputSchema';
import { translatableCreateOrConnectWithoutWordsInputSchema } from './translatableCreateOrConnectWithoutWordsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';

export const translatableCreateNestedOneWithoutWordsInputSchema: z.ZodType<Prisma.translatableCreateNestedOneWithoutWordsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => translatableCreateWithoutWordsInputSchema),
					z.lazy(() => translatableUncheckedCreateWithoutWordsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutWordsInputSchema).optional(),
			connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
		})
		.strict();

export default translatableCreateNestedOneWithoutWordsInputSchema;
