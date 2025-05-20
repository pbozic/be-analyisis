import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutDriver_history_locationsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutDriver_history_locationsInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutDriver_history_locationsInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema),
			]),
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
		})
		.strict();

export default taxi_ordersUpsertWithoutDriver_history_locationsInputSchema;
