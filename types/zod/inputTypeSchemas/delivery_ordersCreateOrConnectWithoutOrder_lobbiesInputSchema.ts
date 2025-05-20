import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema';

export const delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutOrder_lobbiesInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema;
