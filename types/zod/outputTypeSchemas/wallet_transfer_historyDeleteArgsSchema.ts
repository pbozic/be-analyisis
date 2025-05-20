import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyIncludeSchema } from '../inputTypeSchemas/wallet_transfer_historyIncludeSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereUniqueInputSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const wallet_transfer_historyDeleteArgsSchema: z.ZodType<Prisma.wallet_transfer_historyDeleteArgs> = z
	.object({
		select: wallet_transfer_historySelectSchema.optional(),
		include: wallet_transfer_historyIncludeSchema.optional(),
		where: wallet_transfer_historyWhereUniqueInputSchema,
	})
	.strict();

export default wallet_transfer_historyDeleteArgsSchema;
