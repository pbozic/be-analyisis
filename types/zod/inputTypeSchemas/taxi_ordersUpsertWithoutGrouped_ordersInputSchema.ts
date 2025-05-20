import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUpdateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema';
import { taxi_ordersCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutGrouped_ordersInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutGrouped_ordersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutGrouped_ordersInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutGrouped_ordersInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema),
			]),
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
		})
		.strict();

export default taxi_ordersUpsertWithoutGrouped_ordersInputSchema;
