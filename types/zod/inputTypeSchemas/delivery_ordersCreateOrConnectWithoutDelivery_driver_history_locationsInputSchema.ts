import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema;
