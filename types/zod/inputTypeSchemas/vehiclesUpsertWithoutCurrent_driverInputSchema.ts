import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutCurrent_driverInputSchema } from './vehiclesUpdateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema';
import { vehiclesCreateWithoutCurrent_driverInputSchema } from './vehiclesCreateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedCreateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedCreateWithoutCurrent_driverInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutCurrent_driverInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutCurrent_driverInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => vehiclesUpdateWithoutCurrent_driverInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema),
			]),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutCurrent_driverInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutCurrent_driverInputSchema),
			]),
			where: z.lazy(() => vehiclesWhereInputSchema).optional(),
		})
		.strict();

export default vehiclesUpsertWithoutCurrent_driverInputSchema;
