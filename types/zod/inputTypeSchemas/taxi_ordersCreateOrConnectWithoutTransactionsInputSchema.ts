import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutTransactionsInputSchema } from './taxi_ordersCreateWithoutTransactionsInputSchema';
import { taxi_ordersUncheckedCreateWithoutTransactionsInputSchema } from './taxi_ordersUncheckedCreateWithoutTransactionsInputSchema';

export const taxi_ordersCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutTransactionsInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default taxi_ordersCreateOrConnectWithoutTransactionsInputSchema;
