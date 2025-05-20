import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutUserInputSchema } from './taxi_ordersCreateWithoutUserInputSchema';
import { taxi_ordersUncheckedCreateWithoutUserInputSchema } from './taxi_ordersUncheckedCreateWithoutUserInputSchema';

export const taxi_ordersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutUserInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default taxi_ordersCreateOrConnectWithoutUserInputSchema;
