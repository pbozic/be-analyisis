import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyFinancesInputSchema } from './businessCreateManyFinancesInputSchema';

export const businessCreateManyFinancesInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyFinancesInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => businessCreateManyFinancesInputSchema),
				z.lazy(() => businessCreateManyFinancesInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default businessCreateManyFinancesInputEnvelopeSchema;
