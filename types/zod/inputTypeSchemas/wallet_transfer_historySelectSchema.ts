import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';

export const wallet_transfer_historySelectSchema: z.ZodType<Prisma.wallet_transfer_historySelect> = z
	.object({
		wallet_transfer_history_id: z.boolean().optional(),
		order_id: z.boolean().optional(),
		amount: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		success: z.boolean().optional(),
		delivery_order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		taxi_order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
	})
	.strict();

export default wallet_transfer_historySelectSchema;
