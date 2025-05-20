import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUpdateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';
import { menusCreateWithoutDaily_meal_subscribersInputSchema } from './menusCreateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menusWhereInputSchema } from './menusWhereInputSchema';

export const menusUpsertWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusUpsertWithoutDaily_meal_subscribersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => menusUpdateWithoutDaily_meal_subscribersInputSchema),
				z.lazy(() => menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema),
			]),
			create: z.union([
				z.lazy(() => menusCreateWithoutDaily_meal_subscribersInputSchema),
				z.lazy(() => menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
			]),
			where: z.lazy(() => menusWhereInputSchema).optional(),
		})
		.strict();

export default menusUpsertWithoutDaily_meal_subscribersInputSchema;
