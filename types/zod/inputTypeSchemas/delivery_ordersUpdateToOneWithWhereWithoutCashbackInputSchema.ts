import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutCashbackInputSchema } from './delivery_ordersUpdateWithoutCashbackInputSchema';
import { delivery_ordersUncheckedUpdateWithoutCashbackInputSchema } from './delivery_ordersUncheckedUpdateWithoutCashbackInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutCashbackInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutCashbackInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutCashbackInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutCashbackInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateToOneWithWhereWithoutCashbackInputSchema;
