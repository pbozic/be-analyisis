import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutMenu_categoriesInputSchema } from './categoriesCreateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedCreateWithoutMenu_categoriesInputSchema';

export const categoriesCreateOrConnectWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutMenu_categoriesInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutMenu_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutMenu_categoriesInputSchema),
			]),
		})
		.strict();

export default categoriesCreateOrConnectWithoutMenu_categoriesInputSchema;
