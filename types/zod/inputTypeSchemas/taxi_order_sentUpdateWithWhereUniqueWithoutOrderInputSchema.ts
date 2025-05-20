import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentUpdateWithoutOrderInputSchema } from './taxi_order_sentUpdateWithoutOrderInputSchema';
import { taxi_order_sentUncheckedUpdateWithoutOrderInputSchema } from './taxi_order_sentUncheckedUpdateWithoutOrderInputSchema';

export const taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateWithWhereUniqueWithoutOrderInput> =
	z
		.object({
			where: z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => taxi_order_sentUpdateWithoutOrderInputSchema),
				z.lazy(() => taxi_order_sentUncheckedUpdateWithoutOrderInputSchema),
			]),
		})
		.strict();

export default taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema;
