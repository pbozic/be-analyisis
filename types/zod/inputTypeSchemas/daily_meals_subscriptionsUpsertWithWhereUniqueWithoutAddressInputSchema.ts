import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutAddressInputSchema } from './daily_meals_subscriptionsUpdateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema';
import { daily_meals_subscriptionsCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsCreateWithoutAddressInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema';

export const daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => daily_meals_subscriptionsUpdateWithoutAddressInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutAddressInputSchema),
			]),
			create: z.union([
				z.lazy(() => daily_meals_subscriptionsCreateWithoutAddressInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutAddressInputSchema),
			]),
		})
		.strict();

export default daily_meals_subscriptionsUpsertWithWhereUniqueWithoutAddressInputSchema;
