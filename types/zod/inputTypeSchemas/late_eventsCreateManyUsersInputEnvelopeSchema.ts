import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateManyUsersInputSchema } from './late_eventsCreateManyUsersInputSchema';

export const late_eventsCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.late_eventsCreateManyUsersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => late_eventsCreateManyUsersInputSchema),
				z.lazy(() => late_eventsCreateManyUsersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default late_eventsCreateManyUsersInputEnvelopeSchema;
