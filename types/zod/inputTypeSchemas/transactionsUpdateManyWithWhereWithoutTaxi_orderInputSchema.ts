import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';
import { transactionsUpdateManyMutationInputSchema } from './transactionsUpdateManyMutationInputSchema';
import { transactionsUncheckedUpdateManyWithoutTaxi_orderInputSchema } from './transactionsUncheckedUpdateManyWithoutTaxi_orderInputSchema';

export const transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsUpdateManyWithWhereWithoutTaxi_orderInput> =
	z
		.object({
			where: z.lazy(() => transactionsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => transactionsUpdateManyMutationInputSchema),
				z.lazy(() => transactionsUncheckedUpdateManyWithoutTaxi_orderInputSchema),
			]),
		})
		.strict();

export default transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema;
