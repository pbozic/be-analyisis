import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';

export const addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => addressesUpdateWithoutDaily_meals_subscriptionsInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema),
			]),
		})
		.strict();

export default addressesUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema;
