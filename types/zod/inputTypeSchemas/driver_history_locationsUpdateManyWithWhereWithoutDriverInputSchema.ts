import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsScalarWhereInputSchema } from './driver_history_locationsScalarWhereInputSchema';
import { driver_history_locationsUpdateManyMutationInputSchema } from './driver_history_locationsUpdateManyMutationInputSchema';
import { driver_history_locationsUncheckedUpdateManyWithoutDriverInputSchema } from './driver_history_locationsUncheckedUpdateManyWithoutDriverInputSchema';

export const driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateManyWithWhereWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => driver_history_locationsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => driver_history_locationsUpdateManyMutationInputSchema),
				z.lazy(() => driver_history_locationsUncheckedUpdateManyWithoutDriverInputSchema),
			]),
		})
		.strict();

export default driver_history_locationsUpdateManyWithWhereWithoutDriverInputSchema;
