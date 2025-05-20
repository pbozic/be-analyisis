import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUpdateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => vehiclesUpdateWithoutDelivery_ordersInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema;
