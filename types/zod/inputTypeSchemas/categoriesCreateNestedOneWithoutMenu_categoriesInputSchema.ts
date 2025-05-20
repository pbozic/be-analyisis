import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutMenu_categoriesInputSchema } from './categoriesCreateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedCreateWithoutMenu_categoriesInputSchema';
import { categoriesCreateOrConnectWithoutMenu_categoriesInputSchema } from './categoriesCreateOrConnectWithoutMenu_categoriesInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesCreateNestedOneWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutMenu_categoriesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutMenu_categoriesInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutMenu_categoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutMenu_categoriesInputSchema).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default categoriesCreateNestedOneWithoutMenu_categoriesInputSchema;
