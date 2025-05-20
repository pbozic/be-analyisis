import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const allowancesCreateManyInputSchema: z.ZodType<Prisma.allowancesCreateManyInput> = z
	.object({
		allowance_id: z.string().uuid().optional(),
		group_user_id: z.string().optional().nullable(),
		business_users_id: z.string().optional().nullable(),
		amount_taxi_wallet: z.number().optional(),
		amount_transfer_wallet: z.number().optional(),
		amount_delivery_wallet: z.number().optional(),
		amount_any_wallet: z.number().optional(),
		amount_taxi_purchase_order: z.number().optional().nullable(),
		amount_transfer_purchase_order: z.number().optional().nullable(),
		amount_delivery_purchase_order: z.number().optional().nullable(),
		amount_any_purchase_order: z.number().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default allowancesCreateManyInputSchema;
