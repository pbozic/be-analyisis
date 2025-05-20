import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';

export const menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema)
				.optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default menu_categoriesCreateNestedOneWithoutDaily_meal_subscribersInputSchema;
