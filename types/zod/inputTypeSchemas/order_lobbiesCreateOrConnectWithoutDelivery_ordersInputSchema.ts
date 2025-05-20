import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema';

export const order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.order_lobbiesCreateOrConnectWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => order_lobbiesCreateWithoutDelivery_ordersInputSchema),
				z.lazy(() => order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema;
