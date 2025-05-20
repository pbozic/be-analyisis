import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyTransactionsInputSchema } from './documentsCreateManyTransactionsInputSchema';

export const documentsCreateManyTransactionsInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyTransactionsInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyTransactionsInputSchema),
				z.lazy(() => documentsCreateManyTransactionsInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyTransactionsInputEnvelopeSchema;
