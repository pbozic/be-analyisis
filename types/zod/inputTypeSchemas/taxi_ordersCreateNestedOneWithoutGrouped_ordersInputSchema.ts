import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutGrouped_ordersInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutGrouped_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutGrouped_ordersInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateNestedOneWithoutGrouped_ordersInputSchema;
