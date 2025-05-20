import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutSub_categoriesInputSchema } from './categoriesCreateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutSub_categoriesInputSchema } from './categoriesUncheckedCreateWithoutSub_categoriesInputSchema';

export const categoriesCreateOrConnectWithoutSub_categoriesInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutSub_categoriesInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutSub_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutSub_categoriesInputSchema),
			]),
		})
		.strict();

export default categoriesCreateOrConnectWithoutSub_categoriesInputSchema;
