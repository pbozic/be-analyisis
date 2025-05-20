import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historySelectSchema } from '../inputTypeSchemas/wallet_transfer_historySelectSchema';
import { wallet_transfer_historyIncludeSchema } from '../inputTypeSchemas/wallet_transfer_historyIncludeSchema';

export const wallet_transfer_historyArgsSchema: z.ZodType<Prisma.wallet_transfer_historyDefaultArgs> = z
	.object({
		select: z.lazy(() => wallet_transfer_historySelectSchema).optional(),
		include: z.lazy(() => wallet_transfer_historyIncludeSchema).optional(),
	})
	.strict();

export default wallet_transfer_historyArgsSchema;
