import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';
import { transactionsUpdateManyMutationInputSchema } from './transactionsUpdateManyMutationInputSchema';
import { transactionsUncheckedUpdateManyWithoutWallet_fundsInputSchema } from './transactionsUncheckedUpdateManyWithoutWallet_fundsInputSchema';

export const transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema: z.ZodType<Prisma.transactionsUpdateManyWithWhereWithoutWallet_fundsInput> =
	z
		.object({
			where: z.lazy(() => transactionsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => transactionsUpdateManyMutationInputSchema),
				z.lazy(() => transactionsUncheckedUpdateManyWithoutWallet_fundsInputSchema),
			]),
		})
		.strict();

export default transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema;
