import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsCreateWithoutUserInputSchema } from './daily_meals_subscriptionsCreateWithoutUserInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema';

export const daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => daily_meals_subscriptionsCreateWithoutUserInputSchema),
				z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default daily_meals_subscriptionsCreateOrConnectWithoutUserInputSchema;
