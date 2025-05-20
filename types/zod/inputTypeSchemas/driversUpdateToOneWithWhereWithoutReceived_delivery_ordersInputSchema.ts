import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUpdateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema';

export const driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutReceived_delivery_ordersInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInputSchema;
