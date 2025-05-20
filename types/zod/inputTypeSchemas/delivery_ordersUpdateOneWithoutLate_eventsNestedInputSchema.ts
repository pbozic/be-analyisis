import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutLate_eventsInputSchema } from './delivery_ordersCreateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema } from './delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema';
import { delivery_ordersUpsertWithoutLate_eventsInputSchema } from './delivery_ordersUpsertWithoutLate_eventsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema';
import { delivery_ordersUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUpdateWithoutLate_eventsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema';

export const delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutLate_eventsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutLate_eventsInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutLate_eventsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
			upsert: z.lazy(() => delivery_ordersUpsertWithoutLate_eventsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema),
					z.lazy(() => delivery_ordersUpdateWithoutLate_eventsInputSchema),
					z.lazy(() => delivery_ordersUncheckedUpdateWithoutLate_eventsInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUpdateOneWithoutLate_eventsNestedInputSchema;
