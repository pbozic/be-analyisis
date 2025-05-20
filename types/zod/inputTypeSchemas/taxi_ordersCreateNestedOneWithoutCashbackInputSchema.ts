import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutCashbackInputSchema } from './taxi_ordersCreateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedCreateWithoutCashbackInputSchema } from './taxi_ordersUncheckedCreateWithoutCashbackInputSchema';
import { taxi_ordersCreateOrConnectWithoutCashbackInputSchema } from './taxi_ordersCreateOrConnectWithoutCashbackInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutCashbackInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutCashbackInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutCashbackInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutCashbackInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutCashbackInputSchema).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateNestedOneWithoutCashbackInputSchema;
