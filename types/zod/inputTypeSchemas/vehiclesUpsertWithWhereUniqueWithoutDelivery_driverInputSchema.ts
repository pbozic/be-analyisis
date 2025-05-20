import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateWithoutDelivery_driverInputSchema } from './vehiclesUpdateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema';
import { vehiclesCreateWithoutDelivery_driverInputSchema } from './vehiclesCreateWithoutDelivery_driverInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_driverInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_driverInputSchema';

export const vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => vehiclesUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default vehiclesUpsertWithWhereUniqueWithoutDelivery_driverInputSchema;
