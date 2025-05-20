import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesCreateWithoutMenuInputSchema } from './menu_categoriesCreateWithoutMenuInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateWithoutMenuInputSchema';

export const menu_categoriesCreateOrConnectWithoutMenuInputSchema: z.ZodType<Prisma.menu_categoriesCreateOrConnectWithoutMenuInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema),
				z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema),
			]),
		})
		.strict();

export default menu_categoriesCreateOrConnectWithoutMenuInputSchema;
