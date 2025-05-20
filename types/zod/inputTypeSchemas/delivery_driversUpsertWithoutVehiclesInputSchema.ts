import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutVehiclesInputSchema } from './delivery_driversUpdateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedUpdateWithoutVehiclesInputSchema } from './delivery_driversUncheckedUpdateWithoutVehiclesInputSchema';
import { delivery_driversCreateWithoutVehiclesInputSchema } from './delivery_driversCreateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedCreateWithoutVehiclesInputSchema } from './delivery_driversUncheckedCreateWithoutVehiclesInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutVehiclesInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutVehiclesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_driversUpdateWithoutVehiclesInputSchema),
				z.lazy(() => delivery_driversUncheckedUpdateWithoutVehiclesInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutVehiclesInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutVehiclesInputSchema),
			]),
			where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
		})
		.strict();

export default delivery_driversUpsertWithoutVehiclesInputSchema;
