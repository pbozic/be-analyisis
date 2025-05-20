import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const wallet_fundsCountOutputTypeSelectSchema: z.ZodType<Prisma.wallet_fundsCountOutputTypeSelect> = z
	.object({
		transactions: z.boolean().optional(),
	})
	.strict();

export default wallet_fundsCountOutputTypeSelectSchema;
