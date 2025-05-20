import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutWordsInputSchema } from './categoriesCreateWithoutWordsInputSchema';
import { categoriesUncheckedCreateWithoutWordsInputSchema } from './categoriesUncheckedCreateWithoutWordsInputSchema';
import { categoriesCreateOrConnectWithoutWordsInputSchema } from './categoriesCreateOrConnectWithoutWordsInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesCreateNestedOneWithoutWordsInputSchema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutWordsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutWordsInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutWordsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutWordsInputSchema).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default categoriesCreateNestedOneWithoutWordsInputSchema;
