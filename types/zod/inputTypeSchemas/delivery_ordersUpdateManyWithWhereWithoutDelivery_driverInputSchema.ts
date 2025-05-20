import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';
import { delivery_ordersUpdateManyMutationInputSchema } from './delivery_ordersUpdateManyMutationInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutDelivery_driverInputSchema';

export const delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateManyMutationInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateManyWithWhereWithoutDelivery_driverInputSchema;
