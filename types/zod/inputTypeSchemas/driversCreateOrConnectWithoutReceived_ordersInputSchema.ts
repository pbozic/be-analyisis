import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutReceived_ordersInputSchema } from './driversCreateWithoutReceived_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_ordersInputSchema';

export const driversCreateOrConnectWithoutReceived_ordersInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutReceived_ordersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutReceived_ordersInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutReceived_ordersInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutReceived_ordersInputSchema;
