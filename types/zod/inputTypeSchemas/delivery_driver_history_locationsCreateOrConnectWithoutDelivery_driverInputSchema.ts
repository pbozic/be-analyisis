import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema';

export const delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema;
