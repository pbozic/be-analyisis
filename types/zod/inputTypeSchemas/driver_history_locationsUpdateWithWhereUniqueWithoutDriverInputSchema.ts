import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithoutDriverInputSchema } from './driver_history_locationsUpdateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedUpdateWithoutDriverInputSchema } from './driver_history_locationsUncheckedUpdateWithoutDriverInputSchema';

export const driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateWithWhereUniqueWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => driver_history_locationsUpdateWithoutDriverInputSchema),
				z.lazy(() => driver_history_locationsUncheckedUpdateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default driver_history_locationsUpdateWithWhereUniqueWithoutDriverInputSchema;
