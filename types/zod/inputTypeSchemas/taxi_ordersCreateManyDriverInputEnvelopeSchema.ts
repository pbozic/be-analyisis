import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyDriverInputSchema } from './taxi_ordersCreateManyDriverInputSchema';

export const taxi_ordersCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyDriverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => taxi_ordersCreateManyDriverInputSchema),
				z.lazy(() => taxi_ordersCreateManyDriverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default taxi_ordersCreateManyDriverInputEnvelopeSchema;
