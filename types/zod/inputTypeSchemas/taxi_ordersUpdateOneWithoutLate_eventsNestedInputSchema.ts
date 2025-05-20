import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutLate_eventsInputSchema } from './taxi_ordersCreateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema';
import { taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema } from './taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema';
import { taxi_ordersUpsertWithoutLate_eventsInputSchema } from './taxi_ordersUpsertWithoutLate_eventsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema';
import { taxi_ordersUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUpdateWithoutLate_eventsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema } from './taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema';

export const taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutLate_eventsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutLate_eventsInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutLate_eventsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutLate_eventsInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutLate_eventsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutLate_eventsInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutLate_eventsInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutLate_eventsInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutLate_eventsNestedInputSchema;
