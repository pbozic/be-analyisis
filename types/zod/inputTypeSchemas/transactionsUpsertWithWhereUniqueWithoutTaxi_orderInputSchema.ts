import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutTaxi_orderInputSchema } from './transactionsUpdateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedUpdateWithoutTaxi_orderInputSchema } from './transactionsUncheckedUpdateWithoutTaxi_orderInputSchema';
import { transactionsCreateWithoutTaxi_orderInputSchema } from './transactionsCreateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedCreateWithoutTaxi_orderInputSchema } from './transactionsUncheckedCreateWithoutTaxi_orderInputSchema';

export const transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsUpsertWithWhereUniqueWithoutTaxi_orderInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => transactionsUpdateWithoutTaxi_orderInputSchema),
				z.lazy(() => transactionsUncheckedUpdateWithoutTaxi_orderInputSchema),
			]),
			create: z.union([
				z.lazy(() => transactionsCreateWithoutTaxi_orderInputSchema),
				z.lazy(() => transactionsUncheckedCreateWithoutTaxi_orderInputSchema),
			]),
		})
		.strict();

export default transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema;
