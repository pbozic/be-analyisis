import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateManyTaxi_orderInputSchema } from './transactionsCreateManyTaxi_orderInputSchema';

export const transactionsCreateManyTaxi_orderInputEnvelopeSchema: z.ZodType<Prisma.transactionsCreateManyTaxi_orderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => transactionsCreateManyTaxi_orderInputSchema),
				z.lazy(() => transactionsCreateManyTaxi_orderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default transactionsCreateManyTaxi_orderInputEnvelopeSchema;
