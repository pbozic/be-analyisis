import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsCreateWithoutWallet_fundsInputSchema } from './transactionsCreateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedCreateWithoutWallet_fundsInputSchema } from './transactionsUncheckedCreateWithoutWallet_fundsInputSchema';

export const transactionsCreateOrConnectWithoutWallet_fundsInputSchema: z.ZodType<Prisma.transactionsCreateOrConnectWithoutWallet_fundsInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema),
				z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema),
			]),
		})
		.strict();

export default transactionsCreateOrConnectWithoutWallet_fundsInputSchema;
