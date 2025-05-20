import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutDelivery_driver_history_locationsInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema),
			]),
		})
		.strict();

export default delivery_driversCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema;
