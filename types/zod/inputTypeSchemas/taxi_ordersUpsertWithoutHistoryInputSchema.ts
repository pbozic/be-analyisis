import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutHistoryInputSchema } from './taxi_ordersUpdateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedUpdateWithoutHistoryInputSchema } from './taxi_ordersUncheckedUpdateWithoutHistoryInputSchema';
import { taxi_ordersCreateWithoutHistoryInputSchema } from './taxi_ordersCreateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedCreateWithoutHistoryInputSchema } from './taxi_ordersUncheckedCreateWithoutHistoryInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutHistoryInput> = z
	.object({
		update: z.union([
			z.lazy(() => taxi_ordersUpdateWithoutHistoryInputSchema),
			z.lazy(() => taxi_ordersUncheckedUpdateWithoutHistoryInputSchema),
		]),
		create: z.union([
			z.lazy(() => taxi_ordersCreateWithoutHistoryInputSchema),
			z.lazy(() => taxi_ordersUncheckedCreateWithoutHistoryInputSchema),
		]),
		where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
	})
	.strict();

export default taxi_ordersUpsertWithoutHistoryInputSchema;
