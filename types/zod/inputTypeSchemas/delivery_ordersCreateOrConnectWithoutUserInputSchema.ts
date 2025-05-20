import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutUserInputSchema } from './delivery_ordersCreateWithoutUserInputSchema';
import { delivery_ordersUncheckedCreateWithoutUserInputSchema } from './delivery_ordersUncheckedCreateWithoutUserInputSchema';

export const delivery_ordersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutUserInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutUserInputSchema;
