import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutVehiclesInputSchema } from './driversCreateWithoutVehiclesInputSchema';
import { driversUncheckedCreateWithoutVehiclesInputSchema } from './driversUncheckedCreateWithoutVehiclesInputSchema';

export const driversCreateOrConnectWithoutVehiclesInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutVehiclesInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutVehiclesInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutVehiclesInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutVehiclesInputSchema;
