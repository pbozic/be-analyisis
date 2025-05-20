import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutVehicleInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutVehicleInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutVehicleInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutVehicleInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutVehicleInputSchema;
