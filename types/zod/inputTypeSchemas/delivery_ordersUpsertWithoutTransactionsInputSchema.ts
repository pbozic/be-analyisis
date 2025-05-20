import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutTransactionsInputSchema } from './delivery_ordersUpdateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema';
import { delivery_ordersCreateWithoutTransactionsInputSchema } from './delivery_ordersCreateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedCreateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutTransactionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutTransactionsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutTransactionsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutTransactionsInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutTransactionsInputSchema;
