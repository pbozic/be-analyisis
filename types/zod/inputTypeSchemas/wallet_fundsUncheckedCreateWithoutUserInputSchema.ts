import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { transactionsUncheckedCreateNestedManyWithoutWallet_fundsInputSchema } from './transactionsUncheckedCreateNestedManyWithoutWallet_fundsInputSchema';

export const wallet_fundsUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsUncheckedCreateWithoutUserInput> =
	z
		.object({
			wallet_funds_id: z.string().uuid().optional(),
			referral_id: z.string().optional().nullable(),
			charge_id: z.string().optional().nullable(),
			amount: z.number().int(),
			reserved_order: z.string().optional().nullable(),
			reserved_daily_meals_subscription: z.string().optional().nullable(),
			reserved_business: z.string().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			expires_at: z.coerce.date().optional().nullable(),
			type: z.lazy(() => FUNDS_TYPESchema),
			status: z
				.lazy(() => CREDIT_STATUSSchema)
				.optional()
				.nullable(),
			transactions: z.lazy(() => transactionsUncheckedCreateNestedManyWithoutWallet_fundsInputSchema).optional(),
		})
		.strict();

export default wallet_fundsUncheckedCreateWithoutUserInputSchema;
