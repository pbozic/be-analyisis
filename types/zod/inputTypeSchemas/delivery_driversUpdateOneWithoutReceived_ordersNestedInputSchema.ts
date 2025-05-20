import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutReceived_ordersInputSchema } from './delivery_driversCreateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema';
import { delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema } from './delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema';
import { delivery_driversUpsertWithoutReceived_ordersInputSchema } from './delivery_driversUpsertWithoutReceived_ordersInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema';
import { delivery_driversUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUpdateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema';

export const delivery_driversUpdateOneWithoutReceived_ordersNestedInputSchema: z.ZodType<Prisma.delivery_driversUpdateOneWithoutReceived_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutReceived_ordersInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutReceived_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutReceived_ordersInputSchema).optional(),
			upsert: z.lazy(() => delivery_driversUpsertWithoutReceived_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema),
					z.lazy(() => delivery_driversUpdateWithoutReceived_ordersInputSchema),
					z.lazy(() => delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_driversUpdateOneWithoutReceived_ordersNestedInputSchema;
