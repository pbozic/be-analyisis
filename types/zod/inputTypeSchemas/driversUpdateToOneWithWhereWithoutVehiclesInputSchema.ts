import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutVehiclesInputSchema } from './driversUpdateWithoutVehiclesInputSchema';
import { driversUncheckedUpdateWithoutVehiclesInputSchema } from './driversUncheckedUpdateWithoutVehiclesInputSchema';

export const driversUpdateToOneWithWhereWithoutVehiclesInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutVehiclesInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutVehiclesInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutVehiclesInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutVehiclesInputSchema;
