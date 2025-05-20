import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { taxi_ordersCreateNestedOneWithoutCashbackInputSchema } from './taxi_ordersCreateNestedOneWithoutCashbackInputSchema';
import { delivery_ordersCreateNestedOneWithoutCashbackInputSchema } from './delivery_ordersCreateNestedOneWithoutCashbackInputSchema';

export const cashbackCreateWithoutUserInputSchema: z.ZodType<Prisma.cashbackCreateWithoutUserInput> = z
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
		taxi_order: z.lazy(() => taxi_ordersCreateNestedOneWithoutCashbackInputSchema).optional(),
		delivery_order: z.lazy(() => delivery_ordersCreateNestedOneWithoutCashbackInputSchema).optional(),
	})
	.strict();

export default cashbackCreateWithoutUserInputSchema;
