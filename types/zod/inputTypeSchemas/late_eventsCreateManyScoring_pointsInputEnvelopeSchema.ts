import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateManyScoring_pointsInputSchema } from './late_eventsCreateManyScoring_pointsInputSchema';

export const late_eventsCreateManyScoring_pointsInputEnvelopeSchema: z.ZodType<Prisma.late_eventsCreateManyScoring_pointsInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => late_eventsCreateManyScoring_pointsInputSchema),
				z.lazy(() => late_eventsCreateManyScoring_pointsInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default late_eventsCreateManyScoring_pointsInputEnvelopeSchema;
