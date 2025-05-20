import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutLate_eventsInputSchema } from './delivery_ordersCreateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema } from './delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutLate_eventsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutLate_eventsInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_ordersCreateNestedOneWithoutLate_eventsInputSchema;
