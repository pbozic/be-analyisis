import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutTransactionsInputSchema } from './delivery_ordersCreateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedCreateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedCreateWithoutTransactionsInputSchema';
import { delivery_ordersCreateOrConnectWithoutTransactionsInputSchema } from './delivery_ordersCreateOrConnectWithoutTransactionsInputSchema';
import { delivery_ordersUpsertWithoutTransactionsInputSchema } from './delivery_ordersUpsertWithoutTransactionsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema';
import { delivery_ordersUpdateWithoutTransactionsInputSchema } from './delivery_ordersUpdateWithoutTransactionsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema } from './delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema';

export const delivery_ordersUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutTransactionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutTransactionsInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutTransactionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutTransactionsInputSchema).optional(),
			upsert: z.lazy(() => delivery_ordersUpsertWithoutTransactionsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutTransactionsInputSchema),
					z.lazy(() => delivery_ordersUpdateWithoutTransactionsInputSchema),
					z.lazy(() => delivery_ordersUncheckedUpdateWithoutTransactionsInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUpdateOneWithoutTransactionsNestedInputSchema;
