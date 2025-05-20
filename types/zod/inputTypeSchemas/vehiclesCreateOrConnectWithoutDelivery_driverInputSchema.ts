import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutDelivery_driverInputSchema } from './vehiclesCreateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_driverInputSchema';

export const vehiclesCreateOrConnectWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default vehiclesCreateOrConnectWithoutDelivery_driverInputSchema;
