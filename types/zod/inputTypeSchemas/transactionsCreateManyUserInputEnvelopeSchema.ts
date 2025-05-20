import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateManyUserInputSchema } from './transactionsCreateManyUserInputSchema';

export const transactionsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.transactionsCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => transactionsCreateManyUserInputSchema),
				z.lazy(() => transactionsCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default transactionsCreateManyUserInputEnvelopeSchema;
