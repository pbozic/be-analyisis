import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutCategoriesInputSchema } from './translatableCreateWithoutCategoriesInputSchema';
import { translatableUncheckedCreateWithoutCategoriesInputSchema } from './translatableUncheckedCreateWithoutCategoriesInputSchema';
import { translatableCreateOrConnectWithoutCategoriesInputSchema } from './translatableCreateOrConnectWithoutCategoriesInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';

export const translatableCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableCreateNestedOneWithoutCategoriesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => translatableCreateWithoutCategoriesInputSchema),
					z.lazy(() => translatableUncheckedCreateWithoutCategoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutCategoriesInputSchema).optional(),
			connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
		})
		.strict();

export default translatableCreateNestedOneWithoutCategoriesInputSchema;
