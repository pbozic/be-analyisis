import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';
import { order_lobbiesUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUpdateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => order_lobbiesUpdateWithoutDelivery_ordersInputSchema),
				z.lazy(() => order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default order_lobbiesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema;
