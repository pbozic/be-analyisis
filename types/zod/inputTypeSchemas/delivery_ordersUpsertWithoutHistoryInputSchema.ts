import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutHistoryInputSchema } from './delivery_ordersUpdateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedUpdateWithoutHistoryInputSchema } from './delivery_ordersUncheckedUpdateWithoutHistoryInputSchema';
import { delivery_ordersCreateWithoutHistoryInputSchema } from './delivery_ordersCreateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedCreateWithoutHistoryInputSchema } from './delivery_ordersUncheckedCreateWithoutHistoryInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutHistoryInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutHistoryInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutHistoryInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutHistoryInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutHistoryInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutHistoryInputSchema;
