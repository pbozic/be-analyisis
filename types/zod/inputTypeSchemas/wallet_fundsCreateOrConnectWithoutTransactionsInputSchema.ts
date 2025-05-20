import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';
import { wallet_fundsCreateWithoutTransactionsInputSchema } from './wallet_fundsCreateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedCreateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedCreateWithoutTransactionsInputSchema';

export const wallet_fundsCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.wallet_fundsCreateOrConnectWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => wallet_fundsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => wallet_fundsCreateWithoutTransactionsInputSchema),
				z.lazy(() => wallet_fundsUncheckedCreateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default wallet_fundsCreateOrConnectWithoutTransactionsInputSchema;
