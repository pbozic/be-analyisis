import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateManyDelivery_orderInputSchema } from './wallet_transfer_historyCreateManyDelivery_orderInputSchema';

export const wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema: z.ZodType<Prisma.wallet_transfer_historyCreateManyDelivery_orderInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => wallet_transfer_historyCreateManyDelivery_orderInputSchema),
				z.lazy(() => wallet_transfer_historyCreateManyDelivery_orderInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema;
