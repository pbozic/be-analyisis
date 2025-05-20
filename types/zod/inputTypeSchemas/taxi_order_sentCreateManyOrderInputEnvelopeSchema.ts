import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateManyOrderInputSchema } from './taxi_order_sentCreateManyOrderInputSchema';

export const taxi_order_sentCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.taxi_order_sentCreateManyOrderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => taxi_order_sentCreateManyOrderInputSchema),
				z.lazy(() => taxi_order_sentCreateManyOrderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default taxi_order_sentCreateManyOrderInputEnvelopeSchema;
