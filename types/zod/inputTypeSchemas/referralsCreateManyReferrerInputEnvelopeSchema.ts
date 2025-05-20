import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsCreateManyReferrerInputSchema } from './referralsCreateManyReferrerInputSchema';

export const referralsCreateManyReferrerInputEnvelopeSchema: z.ZodType<Prisma.referralsCreateManyReferrerInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => referralsCreateManyReferrerInputSchema),
				z.lazy(() => referralsCreateManyReferrerInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default referralsCreateManyReferrerInputEnvelopeSchema;
