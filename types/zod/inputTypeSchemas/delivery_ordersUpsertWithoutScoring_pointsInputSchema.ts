import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUpdateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';
import { delivery_ordersCreateWithoutScoring_pointsInputSchema } from './delivery_ordersCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutScoring_pointsInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutScoring_pointsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutScoring_pointsInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutScoring_pointsInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutScoring_pointsInputSchema;
