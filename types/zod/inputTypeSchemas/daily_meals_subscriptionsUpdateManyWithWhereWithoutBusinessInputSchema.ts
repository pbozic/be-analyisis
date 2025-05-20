import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsScalarWhereInputSchema } from './daily_meals_subscriptionsScalarWhereInputSchema';
import { daily_meals_subscriptionsUpdateManyMutationInputSchema } from './daily_meals_subscriptionsUpdateManyMutationInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessInputSchema';

export const daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => daily_meals_subscriptionsUpdateManyMutationInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default daily_meals_subscriptionsUpdateManyWithWhereWithoutBusinessInputSchema;
