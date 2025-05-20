import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUpdateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutOrder_lobbiesInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInputSchema;
