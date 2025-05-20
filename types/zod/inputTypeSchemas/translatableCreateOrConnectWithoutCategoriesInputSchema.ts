import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableCreateWithoutCategoriesInputSchema } from './translatableCreateWithoutCategoriesInputSchema';
import { translatableUncheckedCreateWithoutCategoriesInputSchema } from './translatableUncheckedCreateWithoutCategoriesInputSchema';

export const translatableCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableCreateOrConnectWithoutCategoriesInput> =
	z
		.object({
			where: z.lazy(() => translatableWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => translatableCreateWithoutCategoriesInputSchema),
				z.lazy(() => translatableUncheckedCreateWithoutCategoriesInputSchema),
			]),
		})
		.strict();

export default translatableCreateOrConnectWithoutCategoriesInputSchema;
