import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutTransactionsInputSchema } from './wallet_fundsCreateWithoutTransactionsInputSchema';
import { wallet_fundsUncheckedCreateWithoutTransactionsInputSchema } from './wallet_fundsUncheckedCreateWithoutTransactionsInputSchema';
import { wallet_fundsCreateOrConnectWithoutTransactionsInputSchema } from './wallet_fundsCreateOrConnectWithoutTransactionsInputSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';

export const wallet_fundsCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.wallet_fundsCreateNestedOneWithoutTransactionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wallet_fundsCreateWithoutTransactionsInputSchema),
					z.lazy(() => wallet_fundsUncheckedCreateWithoutTransactionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => wallet_fundsCreateOrConnectWithoutTransactionsInputSchema).optional(),
			connect: z.lazy(() => wallet_fundsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default wallet_fundsCreateNestedOneWithoutTransactionsInputSchema;
