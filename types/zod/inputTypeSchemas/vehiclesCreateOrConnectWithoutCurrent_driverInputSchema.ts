import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutCurrent_driverInputSchema } from './vehiclesCreateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedCreateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedCreateWithoutCurrent_driverInputSchema';

export const vehiclesCreateOrConnectWithoutCurrent_driverInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutCurrent_driverInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutCurrent_driverInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutCurrent_driverInputSchema),
			]),
		})
		.strict();

export default vehiclesCreateOrConnectWithoutCurrent_driverInputSchema;
