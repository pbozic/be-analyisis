import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateManyDriverInputSchema } from './taxi_order_sentCreateManyDriverInputSchema';

export const taxi_order_sentCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.taxi_order_sentCreateManyDriverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => taxi_order_sentCreateManyDriverInputSchema),
				z.lazy(() => taxi_order_sentCreateManyDriverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default taxi_order_sentCreateManyDriverInputEnvelopeSchema;
