import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutBusinessInputSchema } from './taxi_ordersCreateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusinessInputSchema } from './taxi_ordersUncheckedCreateWithoutBusinessInputSchema';

export const taxi_ordersCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default taxi_ordersCreateOrConnectWithoutBusinessInputSchema;
