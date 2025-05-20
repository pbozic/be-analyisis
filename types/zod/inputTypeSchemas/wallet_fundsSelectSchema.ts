import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsArgsSchema } from '../outputTypeSchemas/referralsArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { transactionsFindManyArgsSchema } from '../outputTypeSchemas/transactionsFindManyArgsSchema';
import { Wallet_fundsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Wallet_fundsCountOutputTypeArgsSchema';

export const wallet_fundsSelectSchema: z.ZodType<Prisma.wallet_fundsSelect> = z
	.object({
		wallet_funds_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		referral_id: z.boolean().optional(),
		charge_id: z.boolean().optional(),
		amount: z.boolean().optional(),
		reserved_order: z.boolean().optional(),
		reserved_daily_meals_subscription: z.boolean().optional(),
		reserved_business: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		type: z.boolean().optional(),
		status: z.boolean().optional(),
		referral: z.union([z.boolean(), z.lazy(() => referralsArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		transactions: z.union([z.boolean(), z.lazy(() => transactionsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Wallet_fundsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default wallet_fundsSelectSchema;
