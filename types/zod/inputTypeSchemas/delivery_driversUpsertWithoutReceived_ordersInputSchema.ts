import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUpdateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema';
import { delivery_driversCreateWithoutReceived_ordersInputSchema } from './delivery_driversCreateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutReceived_ordersInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutReceived_ordersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_driversUpdateWithoutReceived_ordersInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutReceived_ordersInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema),
			]),
			where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
		})
		.strict();

export default delivery_driversUpsertWithoutReceived_ordersInputSchema;
