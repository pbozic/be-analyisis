import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutDriverInputSchema } from './delivery_ordersCreateWithoutDriverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriverInputSchema } from './delivery_ordersUncheckedCreateWithoutDriverInputSchema';

export const delivery_ordersCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutDriverInputSchema;
