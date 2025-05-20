import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateWithoutDelivery_driverInputSchema } from './vehiclesUpdateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema';

export const vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => vehiclesUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default vehiclesUpdateWithWhereUniqueWithoutDelivery_driverInputSchema;
