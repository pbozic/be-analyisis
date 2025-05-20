import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutDelivery_driver_history_locationsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutDelivery_driver_history_locationsInputSchema;
