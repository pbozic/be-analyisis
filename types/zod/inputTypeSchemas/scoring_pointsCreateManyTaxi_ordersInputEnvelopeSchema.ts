import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateManyTaxi_ordersInputSchema } from './scoring_pointsCreateManyTaxi_ordersInputSchema';

export const scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema: z.ZodType<Prisma.scoring_pointsCreateManyTaxi_ordersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => scoring_pointsCreateManyTaxi_ordersInputSchema),
				z.lazy(() => scoring_pointsCreateManyTaxi_ordersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema;
