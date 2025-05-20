import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutCurrent_vehicleInputSchema } from './driversCreateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedCreateWithoutCurrent_vehicleInputSchema } from './driversUncheckedCreateWithoutCurrent_vehicleInputSchema';

export const driversCreateOrConnectWithoutCurrent_vehicleInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutCurrent_vehicleInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutCurrent_vehicleInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutCurrent_vehicleInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutCurrent_vehicleInputSchema;
