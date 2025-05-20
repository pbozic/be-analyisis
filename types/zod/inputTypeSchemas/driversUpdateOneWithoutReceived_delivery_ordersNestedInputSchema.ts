import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutReceived_delivery_ordersInputSchema } from './driversCreateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema';
import { driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema } from './driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema';
import { driversUpsertWithoutReceived_delivery_ordersInputSchema } from './driversUpsertWithoutReceived_delivery_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInputSchema } from './driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInputSchema';
import { driversUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUpdateWithoutReceived_delivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema } from './driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema';

export const driversUpdateOneWithoutReceived_delivery_ordersNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutReceived_delivery_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutReceived_delivery_ordersInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutReceived_delivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutReceived_delivery_ordersInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutReceived_delivery_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutReceived_delivery_ordersInputSchema),
					z.lazy(() => driversUpdateWithoutReceived_delivery_ordersInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutReceived_delivery_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneWithoutReceived_delivery_ordersNestedInputSchema;
