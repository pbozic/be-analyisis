import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUpdateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema';
import { driversCreateWithoutReceived_delivery_ordersInputSchema } from './driversCreateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutReceived_delivery_ordersInputSchema: z.ZodType<Prisma.driversUpsertWithoutReceived_delivery_ordersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => driversUpdateWithoutReceived_delivery_ordersInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => driversCreateWithoutReceived_delivery_ordersInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema),
			]),
			where: z.lazy(() => driversWhereInputSchema).optional(),
		})
		.strict();

export default driversUpsertWithoutReceived_delivery_ordersInputSchema;
