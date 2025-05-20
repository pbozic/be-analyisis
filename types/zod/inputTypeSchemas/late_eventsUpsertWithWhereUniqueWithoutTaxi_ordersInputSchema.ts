import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutTaxi_ordersInputSchema } from './late_eventsUpdateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { late_eventsCreateWithoutTaxi_ordersInputSchema } from './late_eventsCreateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema';

export const late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => late_eventsUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default late_eventsUpsertWithWhereUniqueWithoutTaxi_ordersInputSchema;
