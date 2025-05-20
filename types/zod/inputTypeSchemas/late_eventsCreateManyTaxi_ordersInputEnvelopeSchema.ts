import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateManyTaxi_ordersInputSchema } from './late_eventsCreateManyTaxi_ordersInputSchema';

export const late_eventsCreateManyTaxi_ordersInputEnvelopeSchema: z.ZodType<Prisma.late_eventsCreateManyTaxi_ordersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => late_eventsCreateManyTaxi_ordersInputSchema),
				z.lazy(() => late_eventsCreateManyTaxi_ordersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default late_eventsCreateManyTaxi_ordersInputEnvelopeSchema;
