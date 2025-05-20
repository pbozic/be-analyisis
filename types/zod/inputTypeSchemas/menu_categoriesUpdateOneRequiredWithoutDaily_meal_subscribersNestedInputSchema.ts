import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateOrConnectWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUpsertWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUpsertWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';

export const menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema: z.ZodType<Prisma.menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInput> =
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
			upsert: z.lazy(() => menu_categoriesUpsertWithoutDaily_meal_subscribersInputSchema).optional(),
			connect: z.lazy(() => menu_categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => menu_categoriesUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema),
				])
				.optional(),
		})
		.strict();

export default menu_categoriesUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema;
