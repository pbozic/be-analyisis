import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUpdateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutDriver_history_locationsInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutDriver_history_locationsInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema;
