import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesUpdateWithoutCurrent_driverInputSchema } from './vehiclesUpdateWithoutCurrent_driverInputSchema';
import { vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema } from './vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema';

export const vehiclesUpdateToOneWithWhereWithoutCurrent_driverInputSchema: z.ZodType<Prisma.vehiclesUpdateToOneWithWhereWithoutCurrent_driverInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => vehiclesUpdateWithoutCurrent_driverInputSchema),
				z.lazy(() => vehiclesUncheckedUpdateWithoutCurrent_driverInputSchema),
			]),
		})
		.strict();

export default vehiclesUpdateToOneWithWhereWithoutCurrent_driverInputSchema;
