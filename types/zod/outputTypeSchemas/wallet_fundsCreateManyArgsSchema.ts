import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsCreateManyInputSchema } from '../inputTypeSchemas/wallet_fundsCreateManyInputSchema';

export const wallet_fundsCreateManyArgsSchema: z.ZodType<Prisma.wallet_fundsCreateManyArgs> = z
	.object({
		data: z.union([wallet_fundsCreateManyInputSchema, wallet_fundsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default wallet_fundsCreateManyArgsSchema;
