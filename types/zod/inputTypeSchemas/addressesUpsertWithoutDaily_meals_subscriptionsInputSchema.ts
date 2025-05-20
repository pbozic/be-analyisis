import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const addressesUpsertWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.addressesUpsertWithoutDaily_meals_subscriptionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => addressesUpdateWithoutDaily_meals_subscriptionsInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => addressesCreateWithoutDaily_meals_subscriptionsInputSchema),
				z.lazy(() => addressesUncheckedCreateWithoutDaily_meals_subscriptionsInputSchema),
			]),
			where: z.lazy(() => addressesWhereInputSchema).optional(),
		})
		.strict();

export default addressesUpsertWithoutDaily_meals_subscriptionsInputSchema;
