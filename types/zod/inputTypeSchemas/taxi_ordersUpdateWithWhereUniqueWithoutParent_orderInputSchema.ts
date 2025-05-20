import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutParent_orderInputSchema } from './taxi_ordersUpdateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutParent_orderInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutParent_orderInputSchema;
