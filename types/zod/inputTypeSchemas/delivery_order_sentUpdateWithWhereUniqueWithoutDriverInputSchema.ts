import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithoutDriverInputSchema } from './delivery_order_sentUpdateWithoutDriverInputSchema';
import { delivery_order_sentUncheckedUpdateWithoutDriverInputSchema } from './delivery_order_sentUncheckedUpdateWithoutDriverInputSchema';

export const delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateWithWhereUniqueWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => delivery_order_sentUpdateWithoutDriverInputSchema),
				z.lazy(() => delivery_order_sentUncheckedUpdateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default delivery_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema;
