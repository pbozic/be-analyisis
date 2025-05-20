import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutDaily_meal_subscribersInputSchema } from './menusCreateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema } from './menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';

export const menusCreateNestedOneWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusCreateNestedOneWithoutDaily_meal_subscribersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menusCreateWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema).optional(),
			connect: z.lazy(() => menusWhereUniqueInputSchema).optional(),
		})
		.strict();

export default menusCreateNestedOneWithoutDaily_meal_subscribersInputSchema;
