import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutLate_eventsInputSchema } from './delivery_ordersCreateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema';

export const delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutLate_eventsInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutLate_eventsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema;
