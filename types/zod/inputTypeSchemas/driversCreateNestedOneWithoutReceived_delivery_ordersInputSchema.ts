import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutReceived_delivery_ordersInputSchema } from './driversCreateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema';
import { driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema } from './driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutReceived_delivery_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutReceived_delivery_ordersInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema;
