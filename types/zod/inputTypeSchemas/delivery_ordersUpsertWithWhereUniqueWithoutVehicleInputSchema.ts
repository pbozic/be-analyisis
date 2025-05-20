import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutVehicleInputSchema } from './delivery_ordersUpdateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedUpdateWithoutVehicleInputSchema } from './delivery_ordersUncheckedUpdateWithoutVehicleInputSchema';
import { delivery_ordersCreateWithoutVehicleInputSchema } from './delivery_ordersCreateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedCreateWithoutVehicleInputSchema } from './delivery_ordersUncheckedCreateWithoutVehicleInputSchema';

export const delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithWhereUniqueWithoutVehicleInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutVehicleInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutVehicleInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutVehicleInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutVehicleInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema;
