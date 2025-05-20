import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUpdateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema';
import { delivery_ordersCreateWithoutLate_eventsInputSchema } from './delivery_ordersCreateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutLate_eventsInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutLate_eventsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutLate_eventsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutLate_eventsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutLate_eventsInputSchema;
