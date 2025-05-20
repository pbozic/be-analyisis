import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutVehicleInputSchema } from './taxi_ordersUpdateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedUpdateWithoutVehicleInputSchema } from './taxi_ordersUncheckedUpdateWithoutVehicleInputSchema';
import { taxi_ordersCreateWithoutVehicleInputSchema } from './taxi_ordersCreateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedCreateWithoutVehicleInputSchema } from './taxi_ordersUncheckedCreateWithoutVehicleInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutVehicleInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutVehicleInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutVehicleInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema;
