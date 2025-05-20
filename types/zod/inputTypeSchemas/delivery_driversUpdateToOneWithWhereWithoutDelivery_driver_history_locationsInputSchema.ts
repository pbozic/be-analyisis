import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_driversUpdateWithoutDelivery_driver_history_locationsInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema),
			]),
		})
		.strict();

export default delivery_driversUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema;
