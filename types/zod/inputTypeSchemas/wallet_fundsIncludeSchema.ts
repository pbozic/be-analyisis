import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsArgsSchema } from '../outputTypeSchemas/referralsArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { transactionsFindManyArgsSchema } from '../outputTypeSchemas/transactionsFindManyArgsSchema';
import { Wallet_fundsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Wallet_fundsCountOutputTypeArgsSchema';

export const wallet_fundsIncludeSchema: z.ZodType<Prisma.wallet_fundsInclude> = z
	.object({
		referral: z.union([z.boolean(), z.lazy(() => referralsArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		transactions: z.union([z.boolean(), z.lazy(() => transactionsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Wallet_fundsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default wallet_fundsIncludeSchema;
