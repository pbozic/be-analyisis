import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutBusinessInputSchema } from './delivery_ordersCreateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedCreateWithoutBusinessInputSchema } from './delivery_ordersUncheckedCreateWithoutBusinessInputSchema';

export const delivery_ordersCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutBusinessInputSchema;
