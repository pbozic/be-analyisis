import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsCreateWithoutTaxi_ordersInputSchema } from './late_eventsCreateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema';

export const late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsCreateOrConnectWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema;
