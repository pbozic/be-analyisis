import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyParent_orderInputSchema } from './taxi_ordersCreateManyParent_orderInputSchema';

export const taxi_ordersCreateManyParent_orderInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyParent_orderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => taxi_ordersCreateManyParent_orderInputSchema),
				z.lazy(() => taxi_ordersCreateManyParent_orderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default taxi_ordersCreateManyParent_orderInputEnvelopeSchema;
