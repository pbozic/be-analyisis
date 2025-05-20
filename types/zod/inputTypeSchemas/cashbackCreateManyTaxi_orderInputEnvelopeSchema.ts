import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateManyTaxi_orderInputSchema } from './cashbackCreateManyTaxi_orderInputSchema';

export const cashbackCreateManyTaxi_orderInputEnvelopeSchema: z.ZodType<Prisma.cashbackCreateManyTaxi_orderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => cashbackCreateManyTaxi_orderInputSchema),
				z.lazy(() => cashbackCreateManyTaxi_orderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default cashbackCreateManyTaxi_orderInputEnvelopeSchema;
