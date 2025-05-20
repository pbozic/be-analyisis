import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutVehicleInputSchema } from './delivery_ordersUpdateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedUpdateWithoutVehicleInputSchema } from './delivery_ordersUncheckedUpdateWithoutVehicleInputSchema';

export const delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithWhereUniqueWithoutVehicleInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutVehicleInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutVehicleInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema;
