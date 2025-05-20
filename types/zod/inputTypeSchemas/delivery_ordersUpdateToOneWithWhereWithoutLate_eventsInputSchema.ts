import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUpdateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutLate_eventsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema;
