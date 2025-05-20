import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateManyDriverInputSchema } from './delivery_ordersCreateManyDriverInputSchema';

export const delivery_ordersCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.delivery_ordersCreateManyDriverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => delivery_ordersCreateManyDriverInputSchema),
				z.lazy(() => delivery_ordersCreateManyDriverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default delivery_ordersCreateManyDriverInputEnvelopeSchema;
