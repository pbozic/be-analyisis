import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutTransactionsInputSchema } from './delivery_ordersCreateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedCreateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedCreateWithoutTransactionsInputSchema';

export const delivery_ordersCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutTransactionsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutTransactionsInputSchema;
