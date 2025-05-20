import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsUpdateWithoutOrderInputSchema } from './delivery_driver_history_locationsUpdateWithoutOrderInputSchema';
import { delivery_driver_history_locationsUncheckedUpdateWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedUpdateWithoutOrderInputSchema';

export const delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInput> =
	z
		.object({
			where: z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => delivery_driver_history_locationsUpdateWithoutOrderInputSchema),
				z.lazy(() => delivery_driver_history_locationsUncheckedUpdateWithoutOrderInputSchema),
			]),
		})
		.strict();

export default delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema;
