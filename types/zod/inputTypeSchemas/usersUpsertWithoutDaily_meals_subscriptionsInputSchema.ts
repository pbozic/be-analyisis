import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { usersCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.usersUpsertWithoutDaily_meals_subscriptionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => usersUpdateWithoutDaily_meals_subscriptionsInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => usersCreateWithoutDaily_meals_subscriptionsInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema),
			]),
			where: z.lazy(() => usersWhereInputSchema).optional(),
		})
		.strict();

export default usersUpsertWithoutDaily_meals_subscriptionsInputSchema;
