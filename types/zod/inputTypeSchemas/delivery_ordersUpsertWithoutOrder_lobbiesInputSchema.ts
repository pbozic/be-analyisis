import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUpdateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutOrder_lobbiesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutOrder_lobbiesInputSchema;
