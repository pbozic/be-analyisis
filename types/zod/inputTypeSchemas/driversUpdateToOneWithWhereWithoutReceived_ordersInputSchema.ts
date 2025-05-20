import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutReceived_ordersInputSchema } from './driversUpdateWithoutReceived_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_ordersInputSchema';

export const driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutReceived_ordersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutReceived_ordersInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutReceived_ordersInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema;
