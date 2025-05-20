import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUpdateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutGrouped_ordersInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInputSchema;
