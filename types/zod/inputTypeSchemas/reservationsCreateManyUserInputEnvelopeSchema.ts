import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateManyUserInputSchema } from './reservationsCreateManyUserInputSchema';

export const reservationsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.reservationsCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => reservationsCreateManyUserInputSchema),
				z.lazy(() => reservationsCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default reservationsCreateManyUserInputEnvelopeSchema;
