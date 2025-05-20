import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutDriver_history_locationsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutDriver_history_locationsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutDriver_history_locationsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutDriver_history_locationsInputSchema;
