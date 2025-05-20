import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsUpdateManyMutationInputSchema } from '../inputTypeSchemas/wallet_fundsUpdateManyMutationInputSchema';
import { wallet_fundsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/wallet_fundsUncheckedUpdateManyInputSchema';
import { wallet_fundsWhereInputSchema } from '../inputTypeSchemas/wallet_fundsWhereInputSchema';

export const wallet_fundsUpdateManyArgsSchema: z.ZodType<Prisma.wallet_fundsUpdateManyArgs> = z
	.object({
		data: z.union([wallet_fundsUpdateManyMutationInputSchema, wallet_fundsUncheckedUpdateManyInputSchema]),
		where: wallet_fundsWhereInputSchema.optional(),
	})
	.strict();

export default wallet_fundsUpdateManyArgsSchema;
