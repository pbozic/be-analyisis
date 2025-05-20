import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutDriverInputSchema } from './delivery_ordersUpdateWithoutDriverInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDriverInputSchema } from './delivery_ordersUncheckedUpdateWithoutDriverInputSchema';
import { delivery_ordersCreateWithoutDriverInputSchema } from './delivery_ordersCreateWithoutDriverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriverInputSchema } from './delivery_ordersUncheckedCreateWithoutDriverInputSchema';

export const delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithWhereUniqueWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutDriverInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutDriverInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema;
