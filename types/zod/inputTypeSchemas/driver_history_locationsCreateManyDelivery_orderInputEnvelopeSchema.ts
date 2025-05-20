import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateManyDelivery_orderInputSchema } from './driver_history_locationsCreateManyDelivery_orderInputSchema';

export const driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema: z.ZodType<Prisma.driver_history_locationsCreateManyDelivery_orderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => driver_history_locationsCreateManyDelivery_orderInputSchema),
				z.lazy(() => driver_history_locationsCreateManyDelivery_orderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema;
