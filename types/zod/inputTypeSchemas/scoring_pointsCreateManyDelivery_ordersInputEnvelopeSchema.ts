import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateManyDelivery_ordersInputSchema } from './scoring_pointsCreateManyDelivery_ordersInputSchema';

export const scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema: z.ZodType<Prisma.scoring_pointsCreateManyDelivery_ordersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => scoring_pointsCreateManyDelivery_ordersInputSchema),
				z.lazy(() => scoring_pointsCreateManyDelivery_ordersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default scoring_pointsCreateManyDelivery_ordersInputEnvelopeSchema;
