import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusCreateWithoutDaily_meal_subscribersInputSchema } from './menusCreateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema';

export const menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusCreateOrConnectWithoutDaily_meal_subscribersInput> =
	z
		.object({
			where: z.lazy(() => menusWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => menusCreateWithoutDaily_meal_subscribersInputSchema),
				z.lazy(() => menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
			]),
		})
		.strict();

export default menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema;
