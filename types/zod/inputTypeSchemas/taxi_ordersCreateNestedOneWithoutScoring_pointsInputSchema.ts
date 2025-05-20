import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutScoring_pointsInputSchema } from './taxi_ordersCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema } from './taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutScoring_pointsInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutScoring_pointsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutScoring_pointsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateNestedOneWithoutScoring_pointsInputSchema;
