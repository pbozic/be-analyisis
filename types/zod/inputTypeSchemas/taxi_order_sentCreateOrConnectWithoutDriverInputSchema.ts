import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentCreateWithoutDriverInputSchema } from './taxi_order_sentCreateWithoutDriverInputSchema';
import { taxi_order_sentUncheckedCreateWithoutDriverInputSchema } from './taxi_order_sentUncheckedCreateWithoutDriverInputSchema';

export const taxi_order_sentCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentCreateOrConnectWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_order_sentCreateWithoutDriverInputSchema),
				z.lazy(() => taxi_order_sentUncheckedCreateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default taxi_order_sentCreateOrConnectWithoutDriverInputSchema;
