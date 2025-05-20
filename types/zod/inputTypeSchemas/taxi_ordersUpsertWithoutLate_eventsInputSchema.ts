import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUpdateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema';
import { taxi_ordersCreateWithoutLate_eventsInputSchema } from './taxi_ordersCreateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutLate_eventsInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutLate_eventsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutLate_eventsInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutLate_eventsInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema),
			]),
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
		})
		.strict();

export default taxi_ordersUpsertWithoutLate_eventsInputSchema;
