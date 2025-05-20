import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsCreateManyBusinessInputSchema } from './business_teamsCreateManyBusinessInputSchema';

export const business_teamsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.business_teamsCreateManyBusinessInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => business_teamsCreateManyBusinessInputSchema),
				z.lazy(() => business_teamsCreateManyBusinessInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default business_teamsCreateManyBusinessInputEnvelopeSchema;
