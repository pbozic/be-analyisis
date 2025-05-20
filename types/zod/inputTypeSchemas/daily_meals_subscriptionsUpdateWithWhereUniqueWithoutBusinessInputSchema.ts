import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUpdateWithoutBusinessInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema';

export const daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => daily_meals_subscriptionsUpdateWithoutBusinessInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default daily_meals_subscriptionsUpdateWithWhereUniqueWithoutBusinessInputSchema;
