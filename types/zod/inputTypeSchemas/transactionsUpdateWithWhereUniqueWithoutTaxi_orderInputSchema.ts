import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutTaxi_orderInputSchema } from './transactionsUpdateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedUpdateWithoutTaxi_orderInputSchema } from './transactionsUncheckedUpdateWithoutTaxi_orderInputSchema';

export const transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsUpdateWithWhereUniqueWithoutTaxi_orderInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => transactionsUpdateWithoutTaxi_orderInputSchema),
				z.lazy(() => transactionsUncheckedUpdateWithoutTaxi_orderInputSchema),
			]),
		})
		.strict();

export default transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema;
