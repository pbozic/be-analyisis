import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const wallet_transfer_historyCreateManyTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyCreateManyTaxi_orderInput> =
	z
		.object({
			wallet_transfer_history_id: z.string().uuid().optional(),
			amount: z.number(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			success: z.boolean(),
		})
		.strict();

export default wallet_transfer_historyCreateManyTaxi_orderInputSchema;
