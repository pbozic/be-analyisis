import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateManyMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateManyMenu_categoryInputSchema';

export const daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => daily_meals_subscriptionsCreateManyMenu_categoryInputSchema),
				z.lazy(() => daily_meals_subscriptionsCreateManyMenu_categoryInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default daily_meals_subscriptionsCreateManyMenu_categoryInputEnvelopeSchema;
