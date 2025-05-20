import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsCountOutputTypeSelectSchema } from './wallet_fundsCountOutputTypeSelectSchema';

export const wallet_fundsCountOutputTypeArgsSchema: z.ZodType<Prisma.wallet_fundsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => wallet_fundsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default wallet_fundsCountOutputTypeSelectSchema;
