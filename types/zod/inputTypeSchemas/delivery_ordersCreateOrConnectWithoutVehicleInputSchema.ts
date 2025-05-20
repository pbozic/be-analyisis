import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutVehicleInputSchema } from './delivery_ordersCreateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedCreateWithoutVehicleInputSchema } from './delivery_ordersUncheckedCreateWithoutVehicleInputSchema';

export const delivery_ordersCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutVehicleInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutVehicleInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutVehicleInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutVehicleInputSchema;
