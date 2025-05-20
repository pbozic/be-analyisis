import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';

export const order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default order_lobbiesUncheckedCreateNestedOneWithoutDelivery_ordersInputSchema;
