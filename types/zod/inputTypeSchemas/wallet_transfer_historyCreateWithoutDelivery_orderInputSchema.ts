import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateNestedOneWithoutWallet_transferInputSchema } from './taxi_ordersCreateNestedOneWithoutWallet_transferInputSchema';

export const wallet_transfer_historyCreateWithoutDelivery_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyCreateWithoutDelivery_orderInput> =
	z
		.object({
			wallet_transfer_history_id: z.string().uuid().optional(),
			amount: z.number(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			success: z.boolean(),
			taxi_order: z.lazy(() => taxi_ordersCreateNestedOneWithoutWallet_transferInputSchema).optional(),
		})
		.strict();

export default wallet_transfer_historyCreateWithoutDelivery_orderInputSchema;
