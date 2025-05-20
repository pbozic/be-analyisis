import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsScalarWhereInputSchema } from './delivery_driver_history_locationsScalarWhereInputSchema';
import { delivery_driver_history_locationsUpdateManyMutationInputSchema } from './delivery_driver_history_locationsUpdateManyMutationInputSchema';
import { delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderInputSchema';

export const delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInput> =
	z
		.object({
			where: z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => delivery_driver_history_locationsUpdateManyMutationInputSchema),
				z.lazy(() => delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderInputSchema),
			]),
		})
		.strict();

export default delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema;
