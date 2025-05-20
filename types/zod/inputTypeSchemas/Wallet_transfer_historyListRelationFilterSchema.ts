import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyWhereInputSchema } from './wallet_transfer_historyWhereInputSchema';

export const Wallet_transfer_historyListRelationFilterSchema: z.ZodType<Prisma.Wallet_transfer_historyListRelationFilter> =
	z
		.object({
			every: z.lazy(() => wallet_transfer_historyWhereInputSchema).optional(),
			some: z.lazy(() => wallet_transfer_historyWhereInputSchema).optional(),
			none: z.lazy(() => wallet_transfer_historyWhereInputSchema).optional(),
		})
		.strict();

export default Wallet_transfer_historyListRelationFilterSchema;
