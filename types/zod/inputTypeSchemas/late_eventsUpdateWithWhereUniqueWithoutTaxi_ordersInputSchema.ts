import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutTaxi_ordersInputSchema } from './late_eventsUpdateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => late_eventsUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default late_eventsUpdateWithWhereUniqueWithoutTaxi_ordersInputSchema;
