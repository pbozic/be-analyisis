import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema';
import { order_lobbiesUpsertWithoutDelivery_ordersInputSchema } from './order_lobbiesUpsertWithoutDelivery_ordersInputSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema } from './order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema';
import { order_lobbiesUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUpdateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const order_lobbiesUpdateOneWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.order_lobbiesUpdateOneWithoutDelivery_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			upsert: z.lazy(() => order_lobbiesUpsertWithoutDelivery_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => order_lobbiesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => order_lobbiesWhereInputSchema)]).optional(),
			connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema),
					z.lazy(() => order_lobbiesUpdateWithoutDelivery_ordersInputSchema),
					z.lazy(() => order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default order_lobbiesUpdateOneWithoutDelivery_ordersNestedInputSchema;
