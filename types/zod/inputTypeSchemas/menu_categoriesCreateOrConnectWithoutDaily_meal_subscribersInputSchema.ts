import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema';

export const menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema),
				z.lazy(() => menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
			]),
		})
		.strict();

export default menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema;
