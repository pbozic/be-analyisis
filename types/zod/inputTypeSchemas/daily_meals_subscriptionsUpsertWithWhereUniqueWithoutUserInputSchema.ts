import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutUserInputSchema } from './daily_meals_subscriptionsUpdateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema';
import { daily_meals_subscriptionsCreateWithoutUserInputSchema } from './daily_meals_subscriptionsCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema';

export const daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => daily_meals_subscriptionsUpdateWithoutUserInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default daily_meals_subscriptionsUpsertWithWhereUniqueWithoutUserInputSchema;
