import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutDelivery_ordersInputSchema } from './businessUpdateWithoutDelivery_ordersInputSchema';
import { businessUncheckedUpdateWithoutDelivery_ordersInputSchema } from './businessUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const businessUpdateToOneWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutDelivery_ordersInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutDelivery_ordersInputSchema;
