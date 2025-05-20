import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateManyBusinessInputSchema } from './daily_meals_subscriptionsCreateManyBusinessInputSchema';

export const daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyBusinessInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => daily_meals_subscriptionsCreateManyBusinessInputSchema),
				z.lazy(() => daily_meals_subscriptionsCreateManyBusinessInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default daily_meals_subscriptionsCreateManyBusinessInputEnvelopeSchema;
