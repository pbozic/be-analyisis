import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateManyUsersInputSchema } from './scoring_pointsCreateManyUsersInputSchema';

export const scoring_pointsCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.scoring_pointsCreateManyUsersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => scoring_pointsCreateManyUsersInputSchema),
				z.lazy(() => scoring_pointsCreateManyUsersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default scoring_pointsCreateManyUsersInputEnvelopeSchema;
