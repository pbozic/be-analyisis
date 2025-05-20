import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutParent_orderInputSchema } from './taxi_ordersUpdateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema';
import { taxi_ordersCreateWithoutParent_orderInputSchema } from './taxi_ordersCreateWithoutParent_orderInputSchema';
import { taxi_ordersUncheckedCreateWithoutParent_orderInputSchema } from './taxi_ordersUncheckedCreateWithoutParent_orderInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutParent_orderInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutParent_orderInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutParent_orderInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutParent_orderInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutParent_orderInputSchema;
