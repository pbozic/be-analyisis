import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutCashbackInputSchema } from './taxi_ordersUpdateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedUpdateWithoutCashbackInputSchema } from './taxi_ordersUncheckedUpdateWithoutCashbackInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutCashbackInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutCashbackInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutCashbackInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutCashbackInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateToOneWithWhereWithoutCashbackInputSchema;
