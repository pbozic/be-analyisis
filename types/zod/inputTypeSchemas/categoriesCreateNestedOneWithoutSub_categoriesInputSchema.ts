import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutSub_categoriesInputSchema } from './categoriesCreateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutSub_categoriesInputSchema } from './categoriesUncheckedCreateWithoutSub_categoriesInputSchema';
import { categoriesCreateOrConnectWithoutSub_categoriesInputSchema } from './categoriesCreateOrConnectWithoutSub_categoriesInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesCreateNestedOneWithoutSub_categoriesInputSchema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutSub_categoriesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutSub_categoriesInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutSub_categoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutSub_categoriesInputSchema).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default categoriesCreateNestedOneWithoutSub_categoriesInputSchema;
