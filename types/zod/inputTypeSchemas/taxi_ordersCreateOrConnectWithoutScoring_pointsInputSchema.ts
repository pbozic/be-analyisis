import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutScoring_pointsInputSchema } from './taxi_ordersCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema';

export const taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutScoring_pointsInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutScoring_pointsInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema),
			]),
		})
		.strict();

export default taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema;
