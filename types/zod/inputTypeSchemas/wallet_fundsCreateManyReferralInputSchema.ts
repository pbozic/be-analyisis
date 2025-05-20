import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FUNDS_TYPESchema } from './FUNDS_TYPESchema';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';

export const wallet_fundsCreateManyReferralInputSchema: z.ZodType<Prisma.wallet_fundsCreateManyReferralInput> = z
	.object({
		wallet_funds_id: z.string().uuid().optional(),
		user_id: z.string(),
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
	})
	.strict();

export default wallet_fundsCreateManyReferralInputSchema;
