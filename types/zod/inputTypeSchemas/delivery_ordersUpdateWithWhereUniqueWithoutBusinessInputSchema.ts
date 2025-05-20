import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutBusinessInputSchema } from './delivery_ordersUpdateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedUpdateWithoutBusinessInputSchema } from './delivery_ordersUncheckedUpdateWithoutBusinessInputSchema';

export const delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutBusinessInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateWithWhereUniqueWithoutBusinessInputSchema;
