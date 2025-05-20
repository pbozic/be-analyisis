import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutDaily_meal_subscribersInputSchema } from './menusCreateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema } from './menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema';
import { menusUpsertWithoutDaily_meal_subscribersInputSchema } from './menusUpsertWithoutDaily_meal_subscribersInputSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema } from './menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema';
import { menusUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUpdateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';

export const menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema: z.ZodType<Prisma.menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menusCreateWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menusCreateOrConnectWithoutDaily_meal_subscribersInputSchema).optional(),
			upsert: z.lazy(() => menusUpsertWithoutDaily_meal_subscribersInputSchema).optional(),
			connect: z.lazy(() => menusWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menusUpdateWithoutDaily_meal_subscribersInputSchema),
					z.lazy(() => menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema),
				])
				.optional(),
		})
		.strict();

export default menusUpdateOneRequiredWithoutDaily_meal_subscribersNestedInputSchema;
