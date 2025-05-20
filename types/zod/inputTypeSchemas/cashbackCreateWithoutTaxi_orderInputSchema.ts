import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { usersCreateNestedOneWithoutCashbackInputSchema } from './usersCreateNestedOneWithoutCashbackInputSchema';
import { delivery_ordersCreateNestedOneWithoutCashbackInputSchema } from './delivery_ordersCreateNestedOneWithoutCashbackInputSchema';

export const cashbackCreateWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackCreateWithoutTaxi_orderInput> = z
	.object({
		cashback_id: z.string().uuid().optional(),
		amount: z.number().int(),
		type: z.lazy(() => CASHBACK_TYPESchema),
		source: z.lazy(() => CASHBACK_SOURCESchema),
		status: z.lazy(() => CASHBACK_STATUSSchema).optional(),
		description: z.string().optional().nullable(),
		earned_at: z.coerce.date().optional(),
		expires_at: z.coerce.date().optional().nullable(),
		converted_at: z.coerce.date().optional().nullable(),
		user: z.lazy(() => usersCreateNestedOneWithoutCashbackInputSchema),
		delivery_order: z.lazy(() => delivery_ordersCreateNestedOneWithoutCashbackInputSchema).optional(),
	})
	.strict();

export default cashbackCreateWithoutTaxi_orderInputSchema;
