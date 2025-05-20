import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema';

export const taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutGrouped_ordersInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutGrouped_ordersInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema),
			]),
		})
		.strict();

export default taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema;
