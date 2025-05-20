import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutDelivery_driverInputSchema } from './delivery_ordersUpdateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema';

export const delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateWithWhereUniqueWithoutDelivery_driverInputSchema;
