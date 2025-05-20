import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateManyUserInputSchema } from './delivery_ordersCreateManyUserInputSchema';

export const delivery_ordersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.delivery_ordersCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => delivery_ordersCreateManyUserInputSchema),
				z.lazy(() => delivery_ordersCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default delivery_ordersCreateManyUserInputEnvelopeSchema;
