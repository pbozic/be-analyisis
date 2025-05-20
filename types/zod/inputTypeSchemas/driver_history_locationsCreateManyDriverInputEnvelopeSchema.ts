import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateManyDriverInputSchema } from './driver_history_locationsCreateManyDriverInputSchema';

export const driver_history_locationsCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.driver_history_locationsCreateManyDriverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => driver_history_locationsCreateManyDriverInputSchema),
				z.lazy(() => driver_history_locationsCreateManyDriverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default driver_history_locationsCreateManyDriverInputEnvelopeSchema;
