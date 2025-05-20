import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutVehiclesInputSchema } from './delivery_driversCreateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedCreateWithoutVehiclesInputSchema } from './delivery_driversUncheckedCreateWithoutVehiclesInputSchema';
import { delivery_driversCreateOrConnectWithoutVehiclesInputSchema } from './delivery_driversCreateOrConnectWithoutVehiclesInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutVehiclesInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutVehiclesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutVehiclesInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutVehiclesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutVehiclesInputSchema).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_driversCreateNestedOneWithoutVehiclesInputSchema;
