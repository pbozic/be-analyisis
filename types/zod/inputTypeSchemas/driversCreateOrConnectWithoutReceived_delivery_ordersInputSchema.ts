import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutReceived_delivery_ordersInputSchema } from './driversCreateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema';

export const driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutReceived_delivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutReceived_delivery_ordersInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema;
