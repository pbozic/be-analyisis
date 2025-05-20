import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';

export const menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema),
				z.lazy(() => menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema),
			]),
		})
		.strict();

export default menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema;
